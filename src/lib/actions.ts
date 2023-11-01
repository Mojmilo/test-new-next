'use server';

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function myAction(id: number, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get('name');

    revalidatePath('/servertest');
    redirect('/servertest');
}

export async function myAction2() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return 'Ok'
}

export async function myAction3(prevState: string | undefined, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return `Your name is ${formData.get('name')}`;
}