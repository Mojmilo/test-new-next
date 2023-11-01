export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>Ok</p>
        </main>
    )
}