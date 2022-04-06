$(function() {
    $("button").click(function() {
        getPull();
    });

    function getPull() {
        var type = $("select.Pull:first").val();
        var result = null;
    
        switch(type) {
            case 'single':
                result = getRandomCount(1);
                break;
            case 'full':
                result = getRandomCount(9);
                break;
        }
    
        if (result) {
            displayContent(result)
        }
    }
    
    function getRandomCount(desired) {
        items = new Array();
        cards = getCards();
        while(items.length < desired)
        {
            items.push(cards.splice(Math.floor(Math.random() * cards.length), 1));
        }
        return items.flat();
    }
    
    function getSingleTemplate(cards) {
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

    function getFullTemplate(cards) {
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
            appendData += `<img src="img/Harrow/Harrow_${cards[i].name}.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                            <p class="text-center" style="color: darkred;">${cards[i].name}</p>
                                            <p class="text-center">${cards[i].description}</p>`
            appendData += `</td>`;
        }
        appendData += `</tr>`;
        appendData += `<tr>`;

        for (var i=3; i <= 5; i++) {
            appendData += `<td class="w-25">`;
            appendData += `<img src="img/Harrow/Harrow_${cards[i].name}.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                            <p class="text-center" style="color: darkred;">${cards[i].name}</p>
                                            <p class="text-center">${cards[i].description}</p>`
            appendData += `</td>`;
        }
        appendData += `</tr>`;
        appendData += `<tr>`;

        for (var i=6; i <= 8; i++) {
            appendData += '<td class="w-25">';
            appendData += `<img src="img/Harrow/Harrow_${cards[i].name}.jpg" class="img-fluid img-thumbnail harrowSpreadImg" alt="Harrow Card">
                                            <p class="text-center" style="color: darkred;">${cards[i].name}</p>
                                            <p class="text-center">${cards[i].description}</p>`
            appendData += '</td>';
        }
        appendData += '</tr>';

        return appendData;
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
    
    function getCards() {
       return Array (
            /* Strength */
    
            {'name': 'The Paladin', 'alignment': 'LG', 'description':'The Paladin is the lawful good card of strength. It represents standing resolutely against trouble, without backing down'},
    
            {'name': 'The Keep', 'alignment': 'NG', 'description':'The Keep is the neutral good card of strength. It represents quiet, unshakeable strength that withstands any hardship'},
    
            {'name': 'The Big Sky', 'alignment': 'CG', 'description':'This is the chaotic good card of strength. It represents momentous change, as when all the slaves of a nation are emancipated'},
    
            {'name': 'The Forge', 'description':'This is the lawful neutral card of strength. It represents strength through diversity, or strength from many sources united against a single trial'},
    
            {'name': 'The Bear', 'alignment': 'NN', 'description':'This is the neutral card of strength. It represents pure strength that cannot be truly tamed or trained'},
    
            {'name': 'The Uprising', 'alignment': 'CN', 'description':'This is the chaotic neutral card of strength. It represents overwhelming strength that catches the subject up in something much more powerful'},
    
            {'name': 'The Fiend', 'description':'This is the lawful evil card of strength. It is a devil that devours the masses of the innocent, and can represent the deaths of many in a disaster'},
    
            {'name': 'The Beating', 'alignment': 'NE', 'description':'This is the neutral evil card of strength. It represents an assault from all quarters, or the mental dissolution of the self'},
    
            {'name': 'The Cyclone', 'alignment': 'CE', 'description':'This is the chaotic evil card of strength. It represents an unstoppable, destructive force unleashed through the plots of intelligent creatures'},
    
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
    
            /*Intelligence*/
    
            {'name': 'The Hidden Truth', 'description': 'This is the lawful good card of intelligence. It represents the discovery of the greater truth within'},
    
            {'name': 'The Wanderer', 'alignment': 'NG', 'description': 'This is the neutral good card of intelligence. It represents a centaur collector who appreciates things others discard as junk'},
    
            {'name': 'The Joke', 'alignment': 'CG', 'description': 'This is the chaotic good card of intelligence. It represents a monster that can only be defeated through trickery, or the value of humor in circumventing difficult people'},
    
            {'name': 'The Inquisitor', 'alignment': 'LN', 'description': 'This is the lawful neutral card of intelligence. It represents an immutable object that cannot be deceived or influenced'},
    
            {'name': 'The Foreign Trader', 'description': 'This is the neutral card of intelligence. It represents spies, merchants, and those who truck in information'},
    
            {'name': 'The Vision', 'alignment': 'CN', 'description': 'This is the chaotic neutral card of intelligence. It represents esoteric and arcane knowledge, or madness'},
    
            {'name': 'The Rakshasa', 'alignment': 'LE', 'description': 'This is the lawful evil card of intelligence. The rakshasa represents domination, mental control, and slavery'},
    
            {'name': 'The Idiot', 'alignment': 'NE', 'description': 'This is the neutral evil card of intelligence. It represents folly, greed, blackmail, bribery, or hubris'},
    
            {'name': 'The Snakebite', 'alignment': 'CE', 'description': 'This is the chaotic evil card of intelligence. It represents poison, venom, assassination, and discord'},
    
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
    
            /*Charisma*/
    
            {'name': 'The Empty Throne', 'description': 'This is the lawful good card of charisma. It represents those who are gone, or a ghost of the past that has taught important lessons'},
    
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

