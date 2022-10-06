import Link from "next/link";


function NavBarButton({LinkPassed,toggle,textContent, children}) {
    return (
        <Link href={LinkPassed}>
            <button
                type="button"
                class="btn btn-light"
                style={{ fontFamily: "PTSans",fontSize:"25px" }}
                disabled={toggle}
            >
                {textContent}
                {children}
            </button>
        </Link>
    );
}

/* why is my button not unclickable??
found that issue is not from the function*/

export default NavBarButton;
