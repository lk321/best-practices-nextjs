import { useRef } from "react";
import { getSession } from "next-auth/client";

import classes from "../styles/profile.module.css";

async function changePasswordHandler(passwordData) {
    const response = await fetch("/api/user/change-password", {
        method: "PATCH",
        body: JSON.stringify(passwordData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();

    console.log(data);
}

function ProfilePage() {
    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredOldPassword = oldPasswordRef.current.value;
        const enteredNewPassword = newPasswordRef.current.value;

        // optional: Add validation

        changePasswordHandler({
            oldPassword: enteredOldPassword,
            newPassword: enteredNewPassword,
        });
    }

    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="new-password">New Password</label>
                    <input
                        type="password"
                        id="new-password"
                        ref={newPasswordRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="old-password">Old Password</label>
                    <input
                        type="password"
                        id="old-password"
                        ref={oldPasswordRef}
                    />
                </div>
                <div className={classes.action}>
                    <button type="submit">Change Password</button>
                </div>
            </form>
        </section>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default ProfilePage;
