function Settler() {
    var former = document.getElementById("searchForm");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.sessionStorage.setItem("flipped", null);
    window.localStorage.setItem('classPicked', null);
    console.log(window.sessionStorage.getItem("flipped"));
    former.addEventListener("submit", (e) => {
        e.preventDefault();
    })

}
function SearchBarC() {
    var search = document.getElementById("search");
    if (search.value === "") {
        search.style.display = "flex";
    search.style.position = "relative";
    search.style.textAlign = "center";
    search.style.width = "100%";
    search.style.height = 40;
    search.style.background = "linear-gradient(#bb443b 0 0) bottom/0% 2px no-repeat";
    search.style.borderBottomLeftRadius = "20px";
    search.style.borderBottomRightRadius =  "20px";
    search.style.border = "transparent";
    search.style.borderBottom = "1px solid #b63b3b";
    search.style.borderBottomWidth = 0;
    search.style.borderBottomColor = "red";
    search.style.outline = "none";
    search.style.transition = "1s ease-in-out";
    } else {
        search.style.backgroundSize = "100% 2px";
        console.log("It is not empty")
    }
}

function Check() {
    var search = document.getElementById("search");
    search.style.display = "flex"
}
function Klam() {
    var validator = window.sessionStorage.getItem("flipped");
    console.log(validator);
    if (validator === "true") {
        CaretAway()
    } else if (validator === "false") {
        FilterCaretSwitch()
    } else {
        FilterCaretSwitch()
    }
}

function FilterCaretSwitch() {
    var caret = document.getElementById("caret");
    var classList = document.getElementById("allClasses");
    var small = document.getElementById("js1");
    var smallers = document.getElementById("js2");
    var smallest = document.getElementById("js3");
    caret.style.transform = "rotate(180deg)";
    caret.style.transition = "0.4s ease-in-out";
    classList.style.height = "100%";
    small.style.fontSize = "12px";
    small.style.transition = "0.7 ease-in-out";
    smallers.style.fontSize = "12px";
    smallers.style.transition = "0.7s ease-in-out";
    smallest.style.fontSize = "12px";
    smallest.style.transition = "0.7s ease-in-out";
    classList.style.backgroundColor = "wheat";
    classList.style.transition = "1s ease-in-out";
    window.sessionStorage.setItem("flipped", true);
}

function CaretAway() {
    var caret = document.getElementById("caret");
    var classList = document.getElementById("allClasses");
    var small = document.getElementById("js1");
    var smallers = document.getElementById("js2");
    var smallest = document.getElementById("js3");
    caret.style.transform = "rotate(0deg)";
    caret.style.transition = "0.7s ease-in-out";
    classList.style.height = "0";
    small.style.fontSize = "0";
    small.style.transition = "0.7s ease-in-out";
    smallers.style.fontSize = "0";
    smallers.style.transition = "0.7s ease-in-out";
    smallest.style.fontSize = "0";
    smallest.style.transition = "0.7s ease-in-out";
    classList.style.backgroundColor = "wheat";
    classList.style.transition = "1s ease-in-out";
    window.sessionStorage.setItem("flipped", false);
}
function Search_Courses() {
    const search_items = [
        {
            id: "physics",
            image: "courses-images/physics.jpg",
            title: "Physics Online Course For Beginners",
            level: "Beginner",
            search_term: "physics",
            plan: "Free",
        },
        {
            id: "chemistry",
            image: "courses-images/chemistry.jpg",
            title: "Chemistry Online Course For Beginners",
            level: "Beginner",
            search_term: "chemistry",
            plan: "Free",
        },
        {
            id: "biology",
            image: "courses-images/biology.jpg",
            title: "Biology Online Course For Beginners",
            level: "Beginner",
            search_term: "biology",
            plan: "Free",
        },
        {
            id: "mathematics",
            image: "courses-images/mathematics.jpg",
            title: "Mathematics Intermediary Course",
            level: "Intermediate",
            search_term: "maths, mathematics",
            plan: "Free",
        },
        {
            id: "physics",
            image: "courses-images/physics1.jpg",
            title: "Physics Intermediary Course",
            level: "Intermediate",
            search_term: "physics",
            plan: "Free",
        }
    ]
    const categories = [...new Set(search_items.map((item) => {return item}))];
    document.getElementById("searchForm").addEventListener("submit", (e) => {
        var data = document.getElementById("search").value.toLowerCase();
        var filter = categories.filter((item) => {
            return item.search_term.toLocaleLowerCase().includes(data);
        })
        if (document.getElementById("search").value.includes(filter)) {
            document.getElementById("contain").innerHTML = "<h1 style='color: black; font-size: 50px;'>Search Results Not Found</h1>";
            console.log("unnoticed");
            
        } else {
            console.log("running");
            displayItem(filter);
        }
    })
    const displayItem = (items) => {
        document.getElementById("contain").innerHTML = items.map(item => {
            var {image, title, level, plan} = item;
            return `<div class="box">
                        <div class="image" id="image">
                            <img src="${image}" draggable="false" alt="Physics" id="physicsImage" class="physicsImage">
                        </div>
                        <div class="contents" id="contents">
                            <h1 id="looker" class="looker">${title}</h1>
                            <div class="tags" id="tags">
                                <h5>${level}</h5>
                                <h5>${plan}</h5>
                            </div>
                        </div>
                    </div>`
        })
    }
}
function JS1Filteration() {
    window.localStorage.setItem('classPicked', 'js1');
    var js1 = document.getElementById('js1');
    var js2 = document.getElementById('js2');
    var js3 = document.getElementById('js3');
    var container = document.getElementById('contain');
    container.innerHTML = `<div class="box" id="box">
                                <div class="image" id="image">
                                    <img src="courses-images/physics.jpg" draggable="false" alt="Physics" id="physicsImage" class="physicsImage">
                                </div>
                                <div class="contents" id="contents">
                                    <h1 id="looker" class="looker">Physics Online Course For Beginners</h1>
                                    <div class="tags" id="tags">
                                        <h5>Beginner</h5>
                                        <h5>Free</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                    <img src="courses-images/chemistry.jpg" draggable="false" alt="Physics" id="physicsImage" class="physicsImage">
                                </div>
                                <div class="contents" id="contents">
                                    <h1 id="looker" class="looker">Chemistry Online Course For Beginners</h1>
                                    <div class="tags" id="tags">
                                        <h5>Beginner</h5>
                                        <h5>Free</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                    <img src="courses-images/biology.jpg" draggable="false" alt="Physics" id="physicsImage" class="physicsImage">
                                </div>
                                <div class="contents" id="contents">
                                    <h1 id="looker" class="looker">Biology Online Course For Beginners</h1>
                                    <div class="tags" id="tags">
                                        <h5>Beginner</h5>
                                        <h5>Free</h5>
                                    </div>
                                </div>
                            </div>`;
    js1.style.backgroundColor = "#6ab6e2";
    js2.style.backgroundColor = "transparent";
    js3.style.backgroundColor = "transparent";
}
function JS2Filtration() {
    window.localStorage.setItem('classPicked', 'js2');
    var js1 = document.getElementById('js1');
    var js2 = document.getElementById('js2');
    var js3 = document.getElementById('js3');
    var container = document.getElementById('contain');
    container.innerHTML = `<div class="box" id="box">
                                <div class="image" id="image">
                                    <img src="courses-images/mathematics.jpg" draggable="false" alt="Physics" id="physicsImage" class="physicsImage">
                                </div>
                                <div class="contents" id="contents">
                                    <h1 id="looker" class="looker">Mathematics Intermediary Course</h1>
                                    <div class="tags" id="tags">
                                        <h5>Intermediate</h5>
                                        <h5>Free</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                    <img src="courses-images/physics1.jpg" draggable="false" alt="Physics" id="physicsImage" class="physicsImage">
                                </div>
                                <div class="contents" id="contents">
                                    <h1 id="looker" class="looker">Physics Intermediary Course</h1>
                                    <div class="tags" id="tags">
                                        <h5>Intermediate</h5>
                                        <h5>Free</h5>
                                    </div>
                                </div>
                            </div>`;
    js1.style.backgroundColor = "transparent";
    js2.style.backgroundColor = "#6ab6e2";
    js3.style.backgroundColor = "transparent";
}

function StopAllVariations() {
    var js1 = document.getElementById("js1");
    var js2 = document.getElementById("js2");
    var js3 = document.getElementById("js3");
    var container = document.getElementById("contain");
    container.innerHTML = `<div class="box" id="box">
                                <div class="image" id="image">
                                <img
                                    src="courses-images/physics.jpg"
                                    draggable="false"
                                    alt="Physics"
                                    id="physicsImage"
                                    class="physicsImage"
                                />
                                </div>
                                <div class="contents" id="contents">
                                <h1 id="looker" class="looker">
                                    Physics Online Course For Beginners
                                </h1>
                                <div class="tags" id="tags">
                                    <h5>Beginner</h5>
                                    <h5>Free</h5>
                                </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                <img
                                    src="courses-images/chemistry.jpg"
                                    draggable="false"
                                    alt="Physics"
                                    id="physicsImage"
                                    class="physicsImage"
                                />
                                </div>
                                <div class="contents" id="contents">
                                <h1 id="looker" class="looker">
                                    Chemistry Online Course For Beginners
                                </h1>
                                <div class="tags" id="tags">
                                    <h5>Beginner</h5>
                                    <h5>Free</h5>
                                </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                <img
                                    src="courses-images/biology.jpg"
                                    draggable="false"
                                    alt="Physics"
                                    id="physicsImage"
                                    class="physicsImage"
                                />
                                </div>
                                <div class="contents" id="contents">
                                <h1 id="looker" class="looker">
                                    Biology Online Course For Beginners
                                </h1>
                                <div class="tags" id="tags">
                                    <h5>Beginner</h5>
                                    <h5>Free</h5>
                                </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                <img
                                    src="courses-images/mathematics.jpg"
                                    draggable="false"
                                    alt="Physics"
                                    id="physicsImage"
                                    class="physicsImage"
                                />
                                </div>
                                <div class="contents" id="contents">
                                <h1 id="looker" class="looker">Mathematics Intermediary Course</h1>
                                <div class="tags" id="tags">
                                    <h5>Intermediate</h5>
                                    <h5>Free</h5>
                                </div>
                                </div>
                            </div>
                            <div class="box" id="box">
                                <div class="image" id="image">
                                <img
                                    src="courses-images/physics1.jpg"
                                    draggable="false"
                                    alt="Physics"
                                    id="physicsImage"
                                    class="physicsImage"
                                />
                                </div>
                                <div class="contents" id="contents">
                                <h1 id="looker" class="looker">Physics Intermediary Course</h1>
                                <div class="tags" id="tags">
                                    <h5>Intermediate</h5>
                                    <h5>Free</h5>
                                </div>
                                </div>
                            </div>`;
    js1.style.backgroundColor = 'transparent';
    js2.style.backgroundColor = 'transparent';
    js3.style.backgroundColor = 'transparent';
    window.localStorage.setItem('classPicked', `cancelled for now`);
}