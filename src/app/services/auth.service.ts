import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private auth: Auth, private router: Router) {}

    getUser() {
        return this.auth.currentUser;
    }

	async register({ email, password }: {email: string, password: string}) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	async login({ email, password }: {email: string, password: string}) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	logout() {
		return signOut(this.auth).then(() => {
            this.router.navigate(['/login']);
        });
	}
}