---
title: What it takes to make a casino game integration
description: In this article we explain what is casino game integration via API.
img: img_blog_casino-game-integration.jpg
heading: What it takes to make a casino game integration
shortDescr: So, you`ve made up your mind to launch a casino. You made a thorough analysis of the market and calculated a business plan. You chose casino games for sale, created a marketing strategy and prepared the promotions. The next step is to make games integration. Let us check what it actually means.
archiveDate: 2019-10-16
---
So, you've made up your mind to launch a casino. You made a thorough analysis of the market and calculated a business plan. You chose [casino games](games) for sale, created a marketing strategy and prepared the promotions. The next step is to make games integration. Let us check what it actually means.

_\*No worries, non-technical people ;) We won't dive deep into the details, but will just give a general overview of the procedure._


There are standard actions which need to be performed in order to make the whole thing work. These actions include:

*   creating a player;
*   authorizing him;
*   obtaining a list of all possible casino games for sale;
*   running a selected game;
*   exchange of info about players' bets and winnings.

**How is game integration done – technically?**

First of all, your technician will need to go through Mascot Gaming API documentation. This is the document which explains how the actions listed above should be introduced within a code. It describes the requests Mascot Gaming platform should receive from an operator and responses that it will send back. In other words, it describes how the two systems should be interconnected.

The standard flow of the casino games for sale in terms of API requests and responses goes like this:

1.  Mascot Gaming receives info that a player makes a bet in some particular game.
2.  We ask an operator whether a player has enough money to make this bet.
3.  Once we get confirmation that the balance is sufficient, we place this bet and run the game.
4.  In case of player's winning we redirect the corresponding info to an operator asking to update his balance accordingly.

After reading the documentation an operator's technician makes the required development on his side and runs some tests. He needs to make sure that his system correctly receives both technical info (e.g. [list of casino games](https://play.mascot.games/), links to launch the games, special parameters such as languages, currencies or free rounds) and statistics. Although everything is provided via API, you can check the history of players’ bets and winnings and data per specific game or game set in your online account at Mascot Gaming.

In most cases game integration tests run smoothly, but if any error occurs, Mascot Gaming team will intervene to find the reason. We check the logs and analyze error notifications to detect that e.g. the file format was wrong and advise how to adjust it.

**Dmitriy M., Chief Technical Director:** “As a rule, our API documentation is clear for the integrators. However, sometimes we receive additional questions. Almost always they are just to confirm whether tech guys understood this or that issue properly. Anyway, our account managers are always there to help and escalate the question to the IT department if there's such a need (though usually there isn't). The integration takes from 2 to 4 weeks when working in a comfortable mode, doing your other tasks simultaneously. But we do have cases when our clients completed the game integration within just a week”.
