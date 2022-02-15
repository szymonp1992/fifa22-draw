const selectLevel1 = document.getElementById('country')

const selectLevel2 = document.getElementById('league')

const data = [
    ["England", "Premier League"],
    ["England", "Championship"],
    ["England", "League One"],
    ["England", "League Two"],
    ["France", "Ligue 1"],
    ["France", "Ligue 2"],
    ["Italy", "Serie A"],
    ["Italy", "Serie B"],
    ["Poland", "Ekstraklasa"],
]

const uniqueOptions1 = new Set();
data.forEach(r => uniqueOptions1.add(r[0]))

const uniqueList1 = [...uniqueOptions1]

const populateLevel1 = function () {
    for (let i = 0; i < uniqueList1.length; i++) {
        const option = `<option value="${uniqueList1[i].toLowerCase().replace(" ", "-")}">${uniqueList1[i]}</option>`;
        selectLevel1.innerHTML += option;
    }
}

const populateLevel2 = function () {
    selectLevel2.innerHTML = ""
    const level1 = selectLevel1.value;
    const filteredArray = data.filter(r => r[0].toLowerCase() === level1)
    const uniqueOptions2 = new Set();
    filteredArray.forEach(r => uniqueOptions2.add(r[1]))
    const uniqueList2 = [...uniqueOptions2]
    for (let i = 0; i < uniqueList2.length; i++) {
        const option = `<option value="${uniqueList2[i].toLowerCase().replace(" ", "-")}">${uniqueList2[i]}</option>`;
        selectLevel2.innerHTML += option;
    }
}

populateLevel1();
populateLevel2();

selectLevel1.addEventListener("change", populateLevel2)