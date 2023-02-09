import { Link } from "@inertiajs/inertia-react";
const Welcome = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Welcome</Link>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                </ul>
            </nav>
            <h1>wellcome</h1>
        </>
    );
};

export default Welcome;
