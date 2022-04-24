import { React } from 'react'

import { useDocument } from '../hooks'
import { Header, LeftSide, PrincipalButtons, RightSide } from '../components/edit-page';

export default function Edit() {
    let data = useDocument(1)

    return (
        <div className='flex flex-col ml-20 items-center w-full screen-min3:ml-20'>
            {
                data.cab !== undefined
                    ?
                    <Header data={data.cab} />
                    :
                    <></>
            }
            {
                data.corpo !== undefined
                    ?
                    <main className='w-full mt-6 flex screen-min4:flex-col screen-min3:w-11/12 screen-min1:9/12 mb-24'>
                        <LeftSide data={data.corpo} />
                        <RightSide />
                    </main>
                    :
                    <></>
            }

            <PrincipalButtons />
        </div >
    );
};

