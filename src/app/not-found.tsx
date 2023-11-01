import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className={'text-6xl'}>404</h1>
                <Link
                    href={'/'}
                    className={'bg-gray-300 p-5 cursor-pointer'}
                >
                    Back
                </Link>
            </div>
        </main>
    )
}