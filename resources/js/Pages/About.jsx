import { Link } from "@inertiajs/inertia-react";
const About = () => {
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
            <h1>About</h1>
        </>
    );
};

export default About;
