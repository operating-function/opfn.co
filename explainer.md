---
layout: default
---

<div style="max-width: 40em; margin: 5em auto;">

Vaporware Explained
Plainly stated, `vaporware` is a new kind of peer-to-peer web application. These applications offer similar functionality as existing websites and apps, but are served in a way that preserves the privacy of the end user, obviates the liability traps that drown developers in compliance policies, and starve users of novel software experiences.

The Vaporware ecosystem is comprised of the following components:
Ethereum NFTs
Mobile PWAs (Progressive Web App) with Embedded Crypto Wallets
Token Bound Smart Contract Accounts
Urbit, a Solid-State Interpreter
Hosted Urbit Ship Onboarding
Web3 Native Sign-In
Vaporware Namespacing Protocol
Read on to learn more about how these systems work to deliver unique affordances to developers and novel experiences to users.


1. NFTs as distribution channel and software 'licensing' scheme
2. End running centralized app stores
3. Token Gated Accounts grow the design space
4. Hosted Urbit ships for streamlined onboarding with a 'right to exit'
5. Crypto wallets as the authentication mechanism to sovereign digital identities and cloud computers
6. A Solid State Interpreter, Urbit, as a way to handle identity, networking, databases, and other tools for building modern web apps.
7. Namespacing Protocol for sharing access to data and code programmatically based on chain state.
Vaporware as hyperstition
Open Questions
Random phrases to save for later


NFTs as distribution channel and software 'licensing' scheme
Million dollar pictures of rocks or monkeys notwithstanding, Non-Fungible Tokens (NFTs) represent a particularly interesting technological affordance: 

> NFTs are a tamper-proof ledger of permissions to data and code. 

As NFT skeptics love to remind us, tokens have tended to merely point to data or content that isn’t itself actually on-chain. As the use case for digital information rights expands to running software, the conception of what an NFT represents must expand beyond the limitations of degen token trading. 

Of course, we thank the degens for forging the path. For building the marketplaces that allow capital to flow towards this new technology. But, we now aim to turn these marketplace not only into a place for status signaling and financial games (although we like those too), but into a channel for monetizing and distributing free and open source technology--including as a secondary market for *used cloud software*. Ever buy a subscription to Adobe Creative Cloud, not use it for three months, and wish you could recoup some of that sunk cost? Us too. 

Vaporware always comes as a operator-ownable NFT with all of the on-chain affordances of that digital asset class: provenance, cryptographic ownership, composability, etc. The main differentiator for Vaporware NFTs from the current landscape is the mechanism of access to off-chain data and running code, and the way that they are linked to digital identities. This enables a mechanism for taking the ‘programmability’ of crypto asset ownership, to use as a licensing layer for cloud software, linked to on-chain identity.

In our initial implementation of "NFTs as programmable identity-linked licenses", with MiladyOS, we are taking a three part approach:
Privileged mint access to current holders of the Milady Maker PFP ERC-721 to receive a sovereign cloud computer, utilizing the PFP as the actual *profile access token* 
Open Edition mOS ERC-721 NFT mint for purchasing a software license to receive ongoing updates to miladyOS
Token gated content access via ERC-1155 tokens that can be bought from and sold into a bonding curve and staking mechanics for earning yield.
Each token in the system is a license for specific software features, a proof of ownership and an access point for off-chain data & compute. While MiladyOS uses these tokens for content access, we envision future applications making use of NFTs for dependency management, open-source library monetization, and even access to computational resources.

End running centralized app stores
As crypto gives software developers a more direct path to customers, the current market makers are trying to protect their domain. Google and Apple’s app store duopoly is effectively a cartel, with very high taxes and restrictive terms of service that stifle innovation. which pushes developers towards the narrow set of software experiences that support the duopoly’s  existing business models (spying on you for advertisers and selling you expensive closed-source hardware, respectively). 

Although desktop OSes still retain their original open by default marketplaces with so much of the world trending towards mobile-first computing, the App Stores’ defacto ban on crypto restricts people to an increasingly anachronistic desktop paradigm, hamstringing the utility of an otherwise device agnostic network. In other words, the App Store cartel effectively controls far too much of the practically available application space.

The upshot: each new technical feature these giants implement expose new cracks in the monopoly. One such crack is the UX affordances of the Progressive Web App (PWA). For Megacorps, the goal of PWAs is to combine the reach and accessibility of the web with the engaging and feature-rich experience of native apps. Of course, with new functionality comes new opportunities and Vaporware is designed to expand into the gaps created by these implementations.  

Key characteristics of PWAs include:
‘Installation’ of the app on the user's home screen, for accessibility akin to a native app
Host OS-level mobile push notifications for users
Improved performance and functionality, even in offline or low-connectivity scenarios
Persistent application state
This last characteristic is deceptively subtle, yet extremely high-leverage. By pairing persistent local state on mobile, and persistent urbit state in the cloud, we can embed Multi-Party Computation wallets like Privy (or an Urbit Native wallet) into these PWAs to broaden the set of possible crypto apps otherwise disallowed by centralized app stores which are at risk of regulatory capture.

And, with the advent of Token Bound Accounts (such as those defined in EIP-6551), having an ecosystem of NFTs that represent your software and individual features affords both developers and software operators capabilities not previously possible in crypto or the broader software world.

Token Gated Accounts grow the design space
Stand-alone NFTs have support from marketplaces and decent adoption among crypto operators, but once you try using them for anything more than monkey pictures it get’s tricky. You can’t sell an classical crypto address (e.g an Externally Owned Account or “EOA”) and the variety of assets or permissions that it controls, but by building on the EIP6551 Token Bound Account (TBA) standard, Vaporware’s Token Gated Accounts (TGA) give you a programmable container with a cryptographically unique identity that can be part of a digital agent that is plugged into the broader financial system.

“Crypto” as a technology is still in it's nascent stage, loved by early adopters for certain unique features (sovereignty, censorship resistance, separation of state and money), but lacking the decades of ‘user experience design’ that has gone into the fiat money networks. Forward progress demands that we improve these experiences in order to achieve the other promises of digital money--programmable financial instruments, autonomous AI agents taking economic action on your behalf, and fully global peer-to-peer networks.

Vaporware offers two main affordances for improving UX:
Token Gated Accounts 
Permissioned mobile wallets for select function calls on those Token Gated Accounts

So again, how does this work in practice? MiladyOS uses a nested account architecture using TGAs *AS REPRESENTED BY THE BELOW DIAGRAM*:

But how does this improve usability? Your Milady Maker PFP remains in your top-level EOA, potentially secured via a hardware wallet, and has ‘admin privileges’ to control all the other accounts in the system. This is fairly standard for Token Bound Accounts based on the EIP6551 Standard. 
But here is where things get interesting, for Vaporware Token Gated Accounts we have added a specific functionality: The ability to pair your in-app wallet with your top-level ethereum wallet

MiladyOS users can take their PWA embedded MPC Wallet and, by signing transactions, grant access permissions to a subset of actions on behalf of multiple TBAs in their personal MiladyOS Account ecosystem. By doing this, we do not need to ask holders of high-value PFP tokens to move their tokens in order to access novel digital experiences, while having a single mobile account that can execute a subset of buy/sell actions and inventory changes. And if that mobile wallet ever gets lost or compromised, the top level EOA that holds the PFP can always revoke permissions and grant them to a newly generated wallet.

We can now bring the longstanding 'principle of least permissions' into the crypto software world--instead of all access defacto running as `root`. Or, a particularly security conscious user could choose to skip the mobile wallet bonding entirely, and execute contract actions directly with their top-level keys. In short, they retain the optionality for the security and UX tradeoffs (#friendtechbtfo).

Hosted Urbit ships for streamlined onboarding with a 'right to exit'
Partnering with Red Horizon, we offer web3 native onboarding to sovereign Urbit applications. Given the early adopters of vaporware are crypto operators, onboarding is driven by a smart contract ecosystem that holds and distributes Urbit IDs, linked to running Urbit instances. When an operator buys vaporware, they are also airdropped an Urbit ID which runs gives their software a self-sovereign cloud in which to run.

"Wait, I thought this was sovereign? But someone else is running it for me!?" 

This is another UX tradeoff, but where cloud technology like facebook or friend.tech make that decision for you (“you may only access your application and data through our servers, and it much be hosted on our hardware”), vaporware offers optionality. If ever you want to take your urbit and run it yourself--you can.

This mechanism works by using Urbit ID’s nature as a cryptographically owned digital asset to:
Enable hosting service providers to place running ships into a coordination contract
Allow developers to set up a link between the NFT that represents their software and a set of ships within the coordination contract,
And then programmatically sell them to vaporware minters, splitting revenue either on chain or via a separate agreement with each other.

At this stage, the vaporware operator now cryptographically owns their Urbit and thus has a inarguable 'right to exit' (via breaching, revoking management keys, and taking their identity elsewhere), and the software running on it, without having to touch a command line -- or a email and password registration form. 

Experienced Urbit users will look at this and ask, "but, how do they get their `+code` to sign in?" 

Our answer? They don't.

Crypto wallets as the authentication mechanism to sovereign digital identities and cloud computers

Web3 users are accustomed to signing in to 'dApps' (no need to make the case for how these aren't actually decentralized. that's a battle for another day) using a crypto wallet and signed messages. 

What we are doing with vaporware is extending that functionality from signing in to an application on someone else's cloud computer, to signing in to *your own sovereign cloud computer*. 

How does vaporware do this? Every urbit instance is fundamentally linked to an Urbit ID. Unlike your macBook, your urbit understands its own identity and tracks the ownership of that identity on Ethereum. It can then grant access to the owner from any browser in the world--assuming a valid signed message is provided.

What does this let you do? Sign in once, and use any app running on your cloud without needing to sign in again. 

For existing urbit users, this functionality is available from %mask; `|install ~ligbel %mask`

Urbit: A Solid State Interpreter for identity, networking and more.

What makes this sovereignty in cloud computing possible? Vaporware is build on top of Urbit, the first-of-it's-kind Solid State Interpreter, as a technology infrastructure for the network age. It bundles identity, networking, databases and other tools (like a webserver)  into a single, portable, cryptographically-owned state machine.

This is accomplished byby having data and compute mapped to the user -- instead of the current model of data and compute mapped to the application -- 


For more on Urbit, visit urbit.org
Namespacing Protocol for sharing access to data and code programmatically based on current chain state.

While Wweb3 native sign- in, and urbit onboarding flows are necessary to deliver delivering a robust customer experience, Vaporware improves this 's core urbit innovation by creating ais the creation of a set of agents that watch chain state and support the distribution of data and code based on that state. As mentioned earlier, we believe NFTs are the tamper-proof ledger of *permissions* to data and code *permissions*. And we think that, as the world’s first Ssolid Sstate Iinterpreter, urbit is the ideal place to store and serve that data and code.

The first iteration of this vision version of this appears in MiladyOS where our chain watcher, %scanner, watches pre-specified contracts for the movement of relevant tokens and their relationships to other addresses--particularly those relating to an urbit ID. Based on the relationship of an urbit ID to specific tokens in the collection, an urbit can modify the way that is shares or receives messages from other miladyOS instances. 

Currently,  (in mOS), this understanding of chain state is shared between permissioned provider nodes, but as the product evolves, eventually these permissioned nodes will become merely be abe just a default option., Yand you will be able to use utilize any node of your own choosing (and/or share your understanding of chain state with others).

a 'trust but verify' model is only possible when users have their own personal server.
- including various sources for receiving and interacting with chain state.

TheA average crypto users isare largely restrained not only byto publicly served front ends, but also byto centralized and predeterminedpre-determined data sources. They have neither the option to check veracity of their blockchain state data source, nor to switch providers change it if they become unreliable.n the event of unreliability. a poorly behaved data provider.

Giving every crypto user an By every user having an always-running cloud computer it becomes is possible to receive and verify the state of global consensus through a larger multitude of options:
- Trust a developer to provide an accurate preset
- Provide your own API keys from a service like Infura or Alchemy
- Run your own blockchain node and connect directly to it from your Urbit
- Trust a friendly node to gossip accurate chain state to you
- Gossip your understanding of chain state out to your friends or some other whitelist of users.

Vaporware as hyperstition
vaporware is all of these things and none of these things. In it's full form, all of these elements will be composable with one another.r, Dwhere developers may utilize some portions and eschew others. Don't want to uses TBAs and just want to use the crypto-native hosted onboarding flow? Go for it. Want to self-host? Go for it (again, we recommend native planet). Hell, maybe you'll even bring a different Ssolid-Sstate Iinterpreter in the mix 👀. Go for it. These aren't the tightly ordered departments of a strict joint-stock company with corporate VP roles, they are the emergent elements of a new system forof human organization and coordination. We are building them from within our corporate cathedral as they are necessary elements of a better user--or shall we say, *human*--experience with crypto, and more broadly, a sovereign digital life. But to truly succeed,  we need to evolve past a legalistic fiction. To ensure a sovereign digital life, tThe technology we build must itself become vaporware..



Open Questions
- Do we want to call our 'token bound accounts' something different? technically I think they are a subset of the things that would be considered a TBA. Need to have `~midtex-narryn` hash out the technical details on this one with me. 
- Does "open edition" actually refer to an nft collection that can mint an infinite number of tokens?
- sign in once, and use any app running on your cloud without needing to sign in __or reconnect your wallet.__ <<<< is this a true statement???
- Should we consider PWAs a core element of vaporware? or pile this in to the Mobile UX portion of things?
- Does using Wallet Connect with mask mean we can support login from custodial accounts (i.e. )


Random phrases to save for later
vaporware is that which can flow between the [apple and google app store] cartel’s fingers. That which takes up the open space between the gaps in the wall, slowly oxidizing and eroding away the prison that keeps you trapped in a prison of CRUD apps and devops hell.

Sidebar
As the software landscape evolves and mobile devices become the primary form of computing for many people around the globe, so too must crypto applications evolve. Therefore, MiladyOS is primarily a mobile app experience. But as we discussed already, mobile app stores don't take too kindly to crypto, and crypto native browser features are lacking, so trying to access crypto assets via an EOA wallet is either difficult, insecure, or both.


</div>
