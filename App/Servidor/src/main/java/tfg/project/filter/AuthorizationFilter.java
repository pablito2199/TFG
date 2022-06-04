package tfg.project.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Key;
import java.util.List;

public class AuthorizationFilter extends BasicAuthenticationFilter {
    private final Key key;

    public AuthorizationFilter(AuthenticationManager manager, Key key) {
        super(manager);
        this.key = key;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        try {
            String header = request.getHeader("Authorization");

            if (header == null || !header.startsWith("Bearer")) {
                chain.doFilter(request, response);
                return;
            }

            UsernamePasswordAuthenticationToken authentication = getAuthentication(header);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            chain.doFilter(request, response);
        } catch (ExpiredJwtException e) {
            response.setStatus(419);
        }
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String token) throws ExpiredJwtException {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token.replace("Bearer", "").trim())
                .getBody();

        String user = claims.getSubject();

        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(claims.get("roles").toString());

        return user == null ? null : new UsernamePasswordAuthenticationToken(user, token, authorities);
    }

}