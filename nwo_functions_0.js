function wordySlots(slots) {
    "use strict";
    var i = slots.length;
    var count = {};
    while (i > 0) {
        i -= 1;
        if (count[slots[i]]) {
            count[slots[i]] += 1;
        } else {
            count[slots[i]] = 1;
        }
    }
    var keys = Object.keys(count);
    var array = [];
    i = keys.length;
    while (i > 0) {
        i -= 1;
        array.push(count[keys[i]] + " " + insignia[keys[i]]);
    }
    return array.join(", ");
}

function bonusMountMatch(bSlots, mSlots) {
    "use strict";
    if (bSlots === "") {
        return true;
    }
    if (bSlots.length !== mSlots.length) {
        return false;
    }
    var diff = mSlots;
    var i = bSlots.length;
    while (i > 0) {
        i -= 1;
        diff = diff.replace(bSlots[i], "");
    }
    return diff === "" || diff === "U" || diff === "UU";
}

function possibleBonuses(mSlots, selected) {
    "use strict";
    var array = [];
    var i = 2;
    while (i < bonuses.length) {
        if (bonusMountMatch(bonuses[i].slots, mSlots)) {
            if (i === selected) {
                array.push(bonuses[i].itemName);
            } else {
                array.push("<a href=\"?" + i + "\" title=\"" + bonuses[i].description + "\">" + bonuses[i].itemName + "</a>");
            }
        }
        i += 1;
    }
    return array.join(", ");
}

function update() {
    "use strict";
    var selected = document.getElementById("select").selectedIndex;
    var bSlots = bonuses[selected].slots;
    document.getElementById("slots").textContent = bonuses[selected].wordySlots;
    document.getElementById("description").textContent = bonuses[selected].description;
    if (selected === 0) {
        document.getElementById("table1").removeAttribute("style");
        document.getElementById("table2").style.display = "none";
    } else {
        document.getElementById("table1").style.display = "none";
        var table = document.getElementById("table2");
        table.removeAttribute("style");
        while (table.rows.length > 1) {
            table.deleteRow(-1);
        }
        if (bSlots.length === 2) {
            document.getElementById("slot3").style.display = "none";
        } else {
            document.getElementById("slot3").removeAttribute("style");
        }
        var i = 0;
        var mSlots;
        var row;
        var cell;
        var link;
        while (i < mounts.length) {
            mSlots = mounts[i].slots;
            if (bonusMountMatch(bSlots, mSlots)) {
                row = table.insertRow(table.rows.length);
                cell = row.insertCell(0);
                link = document.createElement("a");
                link.setAttribute("href", "http://neverwinter.gamepedia.com/" + mounts[i].itemName.replace(/\s/g, "_"));
                link.textContent = mounts[i].itemName;
                cell.appendChild(link);
                cell.className = "nowrap " + mounts[i].quality;
                cell = row.insertCell(1);
                cell.textContent = insignia[mSlots[0]];
                cell.className = cell.textContent;
                cell = row.insertCell(2);
                cell.textContent = insignia[mSlots[1]];
                cell.className = cell.textContent;
                cell = row.insertCell(3);
                cell.innerHTML = possibleBonuses(mSlots, selected);
                if (bSlots.length !== 2) {
                    cell = row.insertCell(3);
                    if (mSlots.length === 3) {
                        cell.textContent = insignia[mSlots[2]];
                        cell.className = cell.textContent;
                    }
                }
            }
            i += 1;
        }
    }
    if (selected === 0) {
        history.replaceState(null, null, location.protocol + "//" + location.host + location.pathname);
    } else {
        history.replaceState(null, null, "?" + selected);
    }
}

function initialize() {
    "use strict";
    var i = 2;
    var table = document.getElementById("table1");
    var row;
    var cell;
    var link;
    bonuses.sort(function(a, b) {
        return a.itemName.localeCompare(b.itemName);
    });
    mounts.sort(function(a, b) {
        var ordera = 0;
        var orderb = 0;
        switch (a.quality) {
            case 'legendary':
                ordera = 10000;
                break;
            case 'epic':
                ordera = 1000;
                break;
            case 'rare':
                ordera = 100;
                break;
            case 'uncommon':
                ordera = 10;
                break;
            case 'common':
                ordera = 1;
                break;
        }
        switch (b.quality) {
            case 'legendary':
                orderb = 10000;
                break;
            case 'epic':
                orderb = 1000;
                break;
            case 'rare':
                orderb = 100;
                break;
            case 'uncommon':
                orderb = 10;
                break;
            case 'common':
                orderb = 1;
                break;
        }
        console.log(ordera - orderb);
        return a.itemName.localeCompare(b.itemName) + orderb - ordera;
        return a.itemName.localeCompare(b.itemName);
    });
    while (i < bonuses.length) {
        row = table.insertRow(table.rows.length);
        cell = row.insertCell(0);
        link = document.createElement("a");
        link.setAttribute("href", "?" + i);
        link.textContent = bonuses[i].itemName;
        cell.appendChild(link);
        cell.className = "nowrap";
        cell = row.insertCell(1);
        bonuses[i].wordySlots = wordySlots(bonuses[i].slots);
        cell.textContent = bonuses[i].wordySlots;
        cell.className = "nowrap";
        cell = row.insertCell(2);
        cell.textContent = bonuses[i].description;
        i += 1;
    }
    var option;
    var select = document.getElementById("select");
    i = 0;
    while (i < bonuses.length) {
        option = document.createElement("option");
        option.text = bonuses[i].itemName;
        option.value = i;
        select.add(option);
        i += 1;
    }
    var query = parseInt(location.search.slice(1));
    if (query >= 0 && query < bonuses.length) {
        select.selectedIndex = query;
    } else {
        select.selectedIndex = 0;
    }
    update();
}
initialize();