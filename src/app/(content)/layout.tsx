import Link from 'next/link';

import { ReturnButton } from '@/components/ReturnButton';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <><header className="p-2 flex flex-col">
            <Link href="/" className="p-2 text-pink-400">
                Home
            </Link>
            <ReturnButton />
        </header>
            {children}</>
    );
}
