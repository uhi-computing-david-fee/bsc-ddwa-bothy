import { Injectable } from '@angular/core';
import { User } from '@supabase/supabase-js';
import { BehaviorSubject, from, tap } from 'rxjs';

import { supabase } from './supabase.client';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  // Holds the currently authenticated Supabase user.
  // null means nobody is signed in.
  //
  // BehaviorSubject is used so components can subscribe to the current
  // authentication state and immediately receive the latest value.
  currentUser$ = new BehaviorSubject<User | null>(null);

  constructor() {
    // Supabase persists authentication sessions in the browser.
    // onAuthStateChange fires when the application starts and whenever
    // authentication changes, for example after login, logout or token refresh.
    //
    // This keeps currentUser$ in sync with the real Supabase session.
    supabase.auth.onAuthStateChange((_event, session) => {
      this.currentUser$.next(session?.user ?? null);
    });
  }

  register(email: string, password: string) {
    // Supabase methods return Promises.
    // from() converts the Promise into an Observable so authentication
    // can be handled using the same RxJS patterns used elsewhere in Angular.
    return from(
      supabase.auth.signUp({ email, password })
    ).pipe(
      // tap() lets us perform a side effect without changing the response.
      // Here we update the application's current-user state after registration.
      tap(res => {
        this.currentUser$.next(res.data.user ?? null);
      })
    );
  }

  login(email: string, password: string) {
    // Authenticate using Supabase email/password authentication.
    return from(
      supabase.auth.signInWithPassword({ email, password })
    ).pipe(

      // Keep our shared current-user state updated after a successful login.
      tap(res => {
        this.currentUser$.next(res.data.user ?? null);
      })
    );
  }

  logout() {
    // End the Supabase session, then clear the application's
    // current-user state.
    return from(
      supabase.auth.signOut()
    ).pipe(
      tap(() => {
        this.currentUser$.next(null);
      })
    );
  }
}