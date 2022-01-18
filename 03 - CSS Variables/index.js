const inputs = document.querySelectorAll(".controls input");

function updateHandle(event){
    // console.log(this.dataset);  // returns all data attributes of element as DOM Map
    // const suffix = (this.dataset.sizing) ? this.dataset.sizing : "";  // returns px for spacing and blur while undefined for color. So need ""

    // Other way around:
    const suffix =  (this.dataset.sizing || "");

    //to Set property of root element
    // var r = document.querySelector(":root"); //Method 1
    var rootElement = document.documentElement; //Method 2
    rootElement.style.setProperty(`--${this.name}`, this.value + suffix);

    /*
    Note: Here the name of root variable and name of input element were kept same.
    if they were different, could have used switch or if-else block to set property name based on this name.
    */


}

inputs.forEach(input => {
    input.addEventListener("change", updateHandle);
    input.addEventListener("mousemove", updateHandle);
})


// Overall, we can use root element to specify the variables and then set them in JS