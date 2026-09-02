# 🎬 Bothy (Assessment 3 Starter)

This repository contains the **Bothy starter project** used for:

**Assessment 3: Prototype**  
**Designing and Developing Web Applications (UG409759)**  
**BSc Computing**

Bothy is a streaming discovery application built using the technology stack used throughout the module:

- Angular
- PrimeNG
- Supabase
- TMDb API
- RxJS
- Responsive HTML and CSS

The starter project provides the common application plumbing so that your assessment work can focus on **implementing the discovery experience designed in Assessment 2**.

## 📌 Important

This repository is a **starting point**, not a completed solution.

You are expected to build your Assessment 3 prototype on top of the supplied project.

Before beginning, read the **[Assessment 3 Starter Project Guidance on Brightspace](https://brightspace.uhi.ac.uk/d2l/le/content/583397/viewContent/5049207/View)**.

The guidance explains the supplied structure, configuration and the areas of the application that you are expected to develop yourself.

## ✅ What Is Already Provided

The starter project includes:

- A configured Angular application
- PrimeNG and PrimeIcons
- The PrimeNG Aura theme
- A basic CSS design-token structure
- A PrimeNG token bridge
- Supabase client configuration
- Working authentication:
  - Registration
  - Login
  - Logout
  - Session persistence
  - Current-user state
- An authentication route guard
- Basic application routing
- An empty `Discover` component
- A basic TMDb service demonstrating a request to the Discover endpoint
- Configuration locations for your own Supabase and TMDb credentials

Authentication and general application setup are supplied so that you can concentrate on the features being assessed.

## 🚀 Getting Started

Clone the repository and open it in VS Code.

Install the supplied dependency versions using:

```bash
npm ci
```
Then run the application using: 
```bash
ng serve
```

## 🔑 Add Your API Configuration

 Before using Supabase or TMDb, add your project credentials to the supplied environment file.

You will find the following configuration:

```typescript
export const environment  = { 
	supabaseUrl: '',
	supabaseAnonKey: '',
	tmdbAPIKey: '' };
```
Add: 
- Your Supabase Project URL
- Your Supabase public anon/publishable key
- Your TMDb API Key

## 🎨 Replace the Starter Design Tokens
The global stylesheet contains a small starter design system using CSS custom properties.

These values are **placeholders**.

Replace them with the design tokens established in your **Assessment 2 Figma design system**.

A PrimeNG token bridge is already provided so that PrimeNG components can inherit your application's visual system. You do not need to recreate this setup, although you may extend it if your design requires additional PrimeNG customisation.

## 🎞️ TMDb Starter Service
A small TMDb service is supplied as an example of the request pattern used during teaching.

It currently makes a request to:

```/discover/movie```

with a small number of example parameters. These parameters are provided only to demonstrate the shape of a working TMDb request.

You are expected to **replace or extend them based on your Assessment 2 discovery design**, including deciding:

-   Which filters your application should expose
-   How filter values are represented in your Angular application
-   How those values are translated into TMDb query parameters
-   How results, loading, empty and error states are handled
-   How movie details and watch-provider information are retrieved

The supplied example is a starting point, not the discovery implementation.

## 📝 Notes
-   Build on the supplied starter rather than creating a separate Angular project.
-   Keep the supplied package versions unless you have a genuine technical reason to change them.
-   Do not commit or submit `node_modules`.
-   Do not place privileged Supabase credentials in the application.
-   Replace the starter design tokens with your own Assessment 2 design system.
-   The supplied TMDb request is an example only and should be developed into your own discovery implementation.
-   Refer to the **Assessment 3 brief and Brightspace guidance** for the full requirements and marking criteria.