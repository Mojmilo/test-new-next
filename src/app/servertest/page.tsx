'use client';

import myAction, {myAction2, myAction3} from "@/lib/actions";
import {useState} from "react";
import {useFormState, useFormStatus} from "react-dom";

export default function Page() {
    const [value, setValue] = useState('Hello World');
    const [pending, setPending] = useState(false);

    const [state, dispatch] = useFormState(myAction3, undefined);

    const myActionWithId = myAction.bind(null, 1);

    const action = async () => {
        setPending(true);
        setValue(await myAction2());
        setPending(false);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action={dispatch}>
                <input type="text" name="name" id="name" placeholder={'name'} />
                <input type="submit" value="Submit" className={'bg-gray-300 p-5 cursor-pointer'} />
                <p>{state}</p>
                <Loading />
            </form>

            <form action={myActionWithId}>
                <input type="text" name="name" id="name" placeholder={'name'} />
                <input type="submit" value="Submit" className={'bg-gray-300 p-5 cursor-pointer'} />
            </form>

            <div className="flex flex-col items-center justify-center gap-5">
                <p>{value}</p>
                {
                    pending &&
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                }
                <button className={'bg-gray-300 p-5 cursor-pointer'} onClick={action}>Click Me</button>
            </div>
        </main>
    );
}

function Loading() {
    const { pending } = useFormStatus();

    return (
        <>
            {
                pending &&
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
        </>
    );
}