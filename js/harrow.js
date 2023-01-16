cards = [];

$(document).ready(function(){
    $(".specialbutton").click(function() {
        getPull();
    });
    $(".revealpast").click(function() {
        revealCards(0);
    });
    $(".revealPresent").click(function() {
        revealCards(1);
    });
    $(".revealFuture").click(function() {
        revealCards(2);
    });

    function getPull() {
        cards = [];
        var type = $("select.pull:first").val();
        var category = $("select.category:first").val();

        switch(type) {
            case 'single':
                getRandomCount(1, category);
                break;
            case 'full':
                getRandomCount(9, category);
                break;
        }

        if (cards) {
            displayContent(cards)
        }
    }

    function getRandomCount(num, category) {
        items = new Array();

        switch(category)
        {
            case 'all':
                cards = getAllCards();
                break;
            case 'str':
                cards = getStrCards();
                break;
            case 'dex':
                cards = getDexCards();
                break;
            case 'con':
                cards = getConCards();
                break;
            case 'int':
                cards = getIntCards();
                break;
            case 'wis':
                cards = getWisCards();
                break;
            case 'cha':
                cards = getChaCards();
                break;
        }

        while(items.length < num)
        {
            items.push(cards.splice(Math.floor(Math.random() * cards.length), 1));
        }
        cards = items.flat();
        return cards;
    }

    function revealCards(number) {
        imgLocation = "img/Harrow/Harrow_";
        switch (number) {
            case 0:
                $('#harrow0:first').attr('src', imgLocation + cards[0].name + '.jpg').addClass(getBackgroundColor(0, cards[0].alignment));
                $('#harrow3:first').attr('src', imgLocation + cards[3].name + '.jpg').addClass(getBackgroundColor(3, cards[3].alignment));
                $('#harrow6:first').attr('src', imgLocation + cards[6].name + '.jpg').addClass(getBackgroundColor(6, cards[6].alignment));
            
                break;
            case 1:
                $('#harrow1:first').attr('src', imgLocation + cards[1].name + '.jpg').addClass(getBackgroundColor(1, cards[1].alignment));
                $('#harrow4:first').attr('src', imgLocation + cards[4].name + '.jpg').addClass(getBackgroundColor(4, cards[4].alignment));
                $('#harrow7:first').attr('src', imgLocation + cards[7].name + '.jpg').addClass(getBackgroundColor(7, cards[7].alignment));
                break;
            case 2:
                $('#harrow2:first').attr('src', imgLocation + cards[2].name + '.jpg').addClass(getBackgroundColor(2, cards[2].alignment));
                $('#harrow5:first').attr('src', imgLocation + cards[5].name + '.jpg').addClass(getBackgroundColor(5, cards[5].alignment));
                $('#harrow8:first').attr('src', imgLocation + cards[8].name + '.jpg').addClass(getBackgroundColor(8, cards[8].alignment));
                break;
        }
    }

    /**
     Used for the single pull logic
    **/
    function getSingleTemplate() {
        displayRevealButtons(false);
        var card = cards[0];
        return `
            <div class="col-6" style="margin-left:auto; margin-right:auto;">
                        <table class="table table-image">
                            <tbody>
                                <tr>
                                    <td class="w-25">
                                        <img src="img/Harrow/Harrow_${card.name}.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                        <p class="text-center" style="color: darkred;">${card.name}</p>
                                        <p class="text-center">${card.description}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        `
    }

        function getFullTemplate() {
        displayRevealButtons(true);
        var appendData = `
            <div class="col-6" style="margin-left:auto; margin-right:auto;">
                <table class="table table-image">
                    <thead>
                        <tr>
                            <th scope="col" style="text-align:center;">Past</th>
                            <th scope="col" style="text-align:center;">Present</th>
                            <th scope="col" style="text-align:center;">Future</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
        `

        for (var i=0; i <= 2; i++) {
            appendData += `<td class="w-25">`;
            appendData += `<img id="harrow${[i]}" src="img/Harrow/Harrow_Placeholder.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                            <p class="text-center" style="color: darkred;">${cards[i].name}</p>
                                            <p class="text-center">${cards[i].description}</p>`
            appendData += `</td>`;
        }
        appendData += `</tr>`;
        appendData += `<tr>`;

        for (var i=3; i <= 5; i++) {
            appendData += `<td class="w-25">`;
            appendData += `<img id="harrow${[i]}" src="img/Harrow/Harrow_Placeholder.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                            <p class="text-center" style="color: darkred;">${cards[i].name}</p>
                                            <p class="text-center">${cards[i].description}</p>`
            appendData += `</td>`;
        }
        appendData += `</tr>`;
        appendData += `<tr>`;

        for (var i=6; i <= 8; i++) {
            appendData += '<td class="w-25">';
            appendData += `<img id="harrow${[i]}" src="img/Harrow/Harrow_Placeholder.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                            <p class="text-center" style="color: darkred;">${cards[i].name}</p>
                                            <p class="text-center">${cards[i].description}</p>`
            appendData += '</td>';
        }
        appendData += '</tr>';

        return appendData;
    }

    function displayRevealButtons(visible) {
        console.log('display reveal buttons');
        if(visible) {
            $('.revealButtons:first').css('display', '');
            return true;
        }
        $('.revealButtons:first').css('display', 'none');
        return false;
    }

    function displayContent(result) {
        if ($('div.pendingContent:first').children.length > 0) {
            $('div.pendingContent:first').empty();
        }

        if (result.length === 1) {
            $('div.pendingContent:first').append(getSingleTemplate(result));
        }

        if (result.length === 9) {
            $('div.pendingContent:first').append(getFullTemplate(result));
        }

    }

    function getAllCards() {
        let allCards = getStrCards();
        allCards = allCards.concat(getDexCards());
        allCards = allCards.concat(getConCards());
        allCards = allCards.concat(getIntCards());
        allCards = allCards.concat(getWisCards());
        allCards = allCards.concat(getChaCards());

        return allCards;
    }

    function getBackgroundColor(position, alignment)
    {
        position++;
        let alignmentSteps = getStepsForAlignment(alignment);
        if(alignmentSteps.perfect === position) {
            return "perfect";
        } else if(alignmentSteps.onestep.includes(position)) {
            return "onestep";
        } else if(alignmentSteps.opposite === position) {
            return "opposite";
        }
    }

    function getStepsForAlignment(alignment) {
        if (alignment === "LG") {
            return {'perfect': 1, 'onestep': [2,4], 'opposite': '9'};
        } else if (alignment === "NG") {
            return {'perfect': 2, 'onestep': [1,3,5], 'opposite': '8'};
        } else if (alignment === "CG") {
            return {'perfect': 3, 'onestep': [2,6], 'opposite': '7'};
        } else if (alignment === "LN") {
            return {'perfect': 4, 'onestep': [1,5,7], 'opposite': '6'};
        } else if (alignment === "NN") {
            return {'perfect': 5, 'onestep': [2,4,6,8], 'opposite': '5'};
        } else if (alignment === "CN") {
            return {'perfect': 6, 'onestep': [3,5,9], 'opposite': '4'};
        } else if (alignment === "LE") {
            return {'perfect': 7, 'onestep': [4,8], 'opposite': '3'};
        } else if (alignment === "NE") {
            return {'perfect': 8, 'onestep': [5,7,9], 'opposite': '2'};
        } else if (alignment === "CE") {
            return {'perfect': 9, 'onestep': [6,8], 'opposite': '1'};
        }
    }

    function getStrCards()
    {
        return Array (
            /* Strength */

            {'name': 'The Paladin', 'alignment': 'LG', 'description':'The Paladin is the lawful good card of strength. It represents standing resolutely against trouble, without backing down'},

            {'name': 'The Keep', 'alignment': 'NG', 'description':'The Keep is the neutral good card of strength. It represents quiet, unshakeable strength that withstands any hardship'},

            {'name': 'The Big Sky', 'alignment': 'CG', 'description':'This is the chaotic good card of strength. It represents momentous change, as when all the slaves of a nation are emancipated'},

            {'name': 'The Forge', 'alignment': 'LN', 'description':'This is the lawful neutral card of strength. It represents strength through diversity, or strength from many sources united against a single trial'},

            {'name': 'The Bear', 'alignment': 'NN', 'description':'This is the neutral card of strength. It represents pure strength that cannot be truly tamed or trained'},

            {'name': 'The Uprising', 'alignment': 'CN', 'description':'This is the chaotic neutral card of strength. It represents overwhelming strength that catches the subject up in something much more powerful'},

            {'name': 'The Fiend', 'alignment': 'LE', 'description':'This is the lawful evil card of strength. It is a devil that devours the masses of the innocent, and can represent the deaths of many in a disaster'},

            {'name': 'The Beating', 'alignment': 'NE', 'description':'This is the neutral evil card of strength. It represents an assault from all quarters, or the mental dissolution of the self'},

            {'name': 'The Cyclone', 'alignment': 'CE', 'description':'This is the chaotic evil card of strength. It represents an unstoppable, destructive force unleashed through the plots of intelligent creatures'},
        );
    }

    function getDexCards()
    {
        return Array (
            /*Dexterity*/

            {'name': 'The Dance', 'alignment': 'LG', 'description':'The Dance is the lawful good card of dexterity. It represents a complicated framework that requires the cooperation of all to avoid collapse'},

            {'name': 'The Cricket', 'alignment': 'NG', 'description':'The Cricket is the neutral good card of dexterity. It represents the grig, quick travel, and the reward at the end of a journey'},

            {'name': 'The Juggler', 'alignment': 'CG', 'description':'The Juggler is the chaotic good card of dexterity. It represents destiny, deities, and those who play with the fates of others'},

            {'name': 'The Locksmith', 'alignment': 'LN', 'description':'This is the lawful neutral card of dexterity. It represents the keys the subject needs to unlock his fate. The card grants the tools needed to unlock some new place, puzzle, or hoard'},

            {'name': 'The Peacock', 'alignment': 'NN', 'description':"This is the neutral card of dexterity. It represents a great beauty that can only be preserved if petrified and frozen in time for eternity, as by a cockatrice's glare"},

            {'name': 'The Rabbit Prince', 'alignment': 'CN', 'description':'This is the chaotic neutral card of dexterity. It represents the quiky vicissitudes of melee combat. The Rabbit Prince is the personification of the capriciousness of battle, and his broken sword indicates that defeat may come to anyone. The card sometimes represents younger members of royal or noble houses'},

            {'name': 'The Avalanche', 'alignment': 'LE', 'description':'This is the lawful evil card of dexterity. It represents disaster: an unthinking panic and destruction that overruns all'},

            {'name': 'The Crows', 'alignment': 'NE', 'description':'This is the neutral evil card of dexterity. It represents murder, theft, and the violent loss of that which is loved'},

            {'name': "The Demon's Lantern", 'alignment': 'CE', 'description':'This is the chaotic evil card of dexterity. It represents an impossible situation of traps, mind tricks, and sleight of hand'},
        );
    }

    function getConCards()
    {
        return Array (
           /*Constitution */

           {'name': 'The Trumpet', 'alignment': 'LG', 'description': 'This is the lawful good card of constitution. It represents an archon who dives aggressively and righteously into danger'},

           {'name': 'The Survivor', 'alignment': 'NG', 'description': 'This is the neutral good card of constitution. It represents a creature that has managed to survive a terrible ordeal, when everyone thought him lost'},

           {'name': 'The Desert', 'alignment': 'CG', 'description': 'This is the chaotic good card of constitution. It represents an environment too difficult for anyone to survive without help. The sphinx may represent a source of salvation from plague'},

           {'name': 'The Brass Dwarf', 'alignment': 'LN', 'description': 'This is the lawful neutral card of constitution, showing an azer. It represents a creature invulnerable to a current threat'},

           {'name': 'The Teamster', 'alignment': 'NN', 'description': 'This is the neutral card of constitution. It represents a external force that drives the subject on'},

           {'name': 'The Mountain Man', 'alignment': 'CN', 'description': "This is the chaotic neutral card of constitution. This giant represents an encounter with a physical power outside of the subject's control"},

           {'name': 'The Tangled Briar', 'alignment': 'LE', 'description': 'This is the lawful evil card of constitution. It represents a historical thing or creature that will have some influence on the question'},

           {'name': 'The Sickness', 'alignment': 'NE', 'description': 'This is the neutral evil card of constitution. It represents corruption, famine, plague, pestilence, and disease'},

           {'name': 'The Waxworks', 'alignment': 'CE', 'description': 'This is the chaotic evil card of constitution. It represents a place of torture, imprisonment, helplessness, and paralysis'},
        );
    }

    function getIntCards()
    {
        return Array (
            /*Intelligence*/

            {'name': 'The Hidden Truth', 'alignment': 'LG', 'description': 'This is the lawful good card of intelligence. It represents the discovery of the greater truth within'},

            {'name': 'The Wanderer', 'alignment': 'NG', 'description': 'This is the neutral good card of intelligence. It represents a centaur collector who appreciates things others discard as junk'},

            {'name': 'The Joke', 'alignment': 'CG', 'description': 'This is the chaotic good card of intelligence. It represents a monster that can only be defeated through trickery, or the value of humor in circumventing difficult people'},

            {'name': 'The Inquisitor', 'alignment': 'LN', 'description': 'This is the lawful neutral card of intelligence. It represents an immutable object that cannot be deceived or influenced'},

            {'name': 'The Foreign Trader', 'alignment': 'NN', 'description': 'This is the neutral card of intelligence. It represents spies, merchants, and those who truck in information'},

            {'name': 'The Vision', 'alignment': 'CN', 'description': 'This is the chaotic neutral card of intelligence. It represents esoteric and arcane knowledge, or madness'},

            {'name': 'The Rakshasa', 'alignment': 'LE', 'description': 'This is the lawful evil card of intelligence. The rakshasa represents domination, mental control, and slavery'},

            {'name': 'The Idiot', 'alignment': 'NE', 'description': 'This is the neutral evil card of intelligence. It represents folly, greed, blackmail, bribery, or hubris'},

            {'name': 'The Snakebite', 'alignment': 'CE', 'description': 'This is the chaotic evil card of intelligence. It represents poison, venom, assassination, and discord'},
        );
    }

    function getWisCards()
    {
        return Array (
            /*Wisdom*/

            {'name': 'The Winged Serpent', 'alignment': 'LG', 'description': 'This is the lawful good card of wisdom. It represents the couatl, the bridge of understanding between the towers of knowledge and judgement'},

            {'name': 'The Midwife', 'alignment': 'NG', 'description': 'This is the neutral good card of wisdom. It represents the enabler or conduit of new creation, information, or arrivals'},

            {'name': 'The Publican', 'alignment': 'CG', 'description': 'This is the chaotic good card of wisdom. It represents fellowship and refuge. The cyclops is a seemingly inconsequential figure who nonetheless has relevant insight'},

            {'name': 'The Queen Mother', 'alignment': 'LN', 'description': 'This is the lawful neutral card of wisdom. This formian is the personification of knowledge, who is fond of the powerless, the underclass, and those who will show her obeisance'},

            {'name': 'The Owl', 'alignment': 'NN', 'description': 'This is the neutral card of wisdom. It represents the harsh wisdom of the natural order. The owl holds a needle that can bind life together or pick it apart'},

            {'name': 'The Carnival', 'alignment': 'CN', 'description': 'This is the chaotic neutral card of wisdom. It represents illusions and false dreams'},

            {'name': 'The Eclipse', 'alignment': 'LE', 'description': "This is the lawful evil card of wisdom. It represents loss of faith and purpose, and the subject's doubt about his abilities or prospects"},

            {'name': 'The Mute Hag', 'alignment': 'NE', 'description': 'This is the neutral evil card of wisdom. It represents the insightful hag, a purveyor of blood pacts, treacherous secrets, and discord'},

            {'name': 'The Lost', 'alignment': 'CE', 'description': 'This is the chaotic evil card of wisdom. The bodak represents the permanently insane, lost among lunatics and psychopaths in insane asylums. It is a card of emptiness'},
        );
    }

    function getChaCards()
    {
        return Array (
            /*Charisma*/

            {'name': 'The Empty Throne', 'alignment': 'LG', 'description': 'This is the lawful good card of charisma. It represents those who are gone, or a ghost of the past that has taught important lessons'},

            {'name': 'The Theater', 'alignment': 'NG', 'description': 'This is the neutral good card of charisma. It represents prophecy, with a true prophet acting a part as the puppet of the gods'},

            {'name': 'The Unicorn', 'alignment': 'CG', 'description': 'This is the chaotic good card of charisma. It represents one who generously offers up that which is sought'},

            {'name': 'The Marriage', 'alignment': 'LN', 'description': 'This is the lawful neutral card of charisma. It represents a union of peoples, ideas, or kingdoms that might be as productive or as ruinous as the bonding of a salamander and a water weird'},

            {'name': 'The Twin', 'alignment': 'NN', 'description': 'This is the neutral card of charisma. The doppelganger represents duality of purpose or identity, or indecision and fence-sitting for the subject or the entire spread'},

            {'name': 'The Courtesan', 'alignment': 'CN', 'description': 'This is the chaotic neutral card of charisma. It represents political intrigue and the superficiality of social niceties'},

            {'name': 'The Tyrant', 'alignment': 'LE', 'description': 'This is the lawful evil card of charisma. It represents a ruler who harms those he rules'},

            {'name': 'The Betrayal', 'alignment': 'NE', 'description': 'This is the neutral evil card of charisma. It represents selfishness and envy'},

            {'name': 'The Liar', 'alignment': 'CE', 'description': 'This is the chaotic evil card of charisma. It represents destructive, treacherous love. The lamia signals obsession, star-crossed lovers, or unrequited desire'},
        );
    }
});