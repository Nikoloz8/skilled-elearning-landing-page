let coursePartOne = document.querySelector(".courses-part1")
let coursePartTwo = document.querySelector(".courses-part2")

function moveChild() {
    let courseB = document.querySelectorAll(".b")
    if (window.innerWidth <= 1200) {
        if (!coursePartOne.contains(courseB[0])) {
            courseB.forEach(e => coursePartOne.appendChild(e))
        }
    } else {
        if (!coursePartTwo.contains(courseB[0])) {
            courseB.forEach(e => coursePartTwo.appendChild(e))
        }
    }
}

moveChild()

window.addEventListener("resize", moveChild)