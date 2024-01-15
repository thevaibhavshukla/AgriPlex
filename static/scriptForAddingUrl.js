{/* <script>

        var productsData = {{ productsData| tojson}}
        // console.log(productsData.length)
        // console.log(productsData)
        window.onload = async function exampleFunction() {
            // console.log('The Script will load now.');

            // const resp = await axios.get("api/getIndexData");

            // console.log(resp.data.productsData)
            // console.log(resp.data.productsData.nameOne)

            // const first = document.querySelector(".name-to-be-added")
            const allAnchors = document.querySelectorAll(".url-to-be-added")
            // console.log(allAnchors)
            const sameLinkLength = (allAnchors.length / productsData.length)
            // console.log(sameLinkLength)

            for (var i = 0; i < productsData.length; i++) {
                // console.log("Hello")

                for (var j = 0; j < 6; j++) {
                    // allAnchors[(i*6) + j].setAttribute("href", productsData[i].urlToBeAdded); 

                    allAnchors[(i * sameLinkLength) + j].setAttribute("href", productsData[i].urlToBeAdded);
                }

                // allAnchors[i].setAttribute("href", productsData[0].urlToBeAdded); //0
                // allAnchors[i].setAttribute("href", productsData[0].urlToBeAdded); //1
                // allAnchors[i].setAttribute("href", productsData[0].urlToBeAdded); //2
                // allAnchors[i].setAttribute("href", productsData[0].urlToBeAdded); //3
                // allAnchors[i].setAttribute("href", productsData[0].urlToBeAdded); //4
                // allAnchors[i].setAttribute("href", productsData[0].urlToBeAdded); //5


                // for(var j = 0; j < 6; j++){
                //     // console.log("Hello")
                //     // console.log(allAnchors[i])
                //     // allAnchors[i+j].setAttribute("href", productsData[i].urlToBeAdded);
                // }



                // for(var j = 0; j < (allAnchors.length/ productsData.length); j++){
                // allAnchors[i+j].setAttribute("href", productsData[i % (allAnchors.length/ productsData.length)].urlToBeAdded);
                // }

                // allAnchors[i+1].setAttribute("href", productsData[i].urlToBeAdded);
            }
            // console.log(first)
            // first.innerText = resp.data.productsData.name-1;
            // first.innerHTML = `<h3 >${productsData.nameOne}<br>${productsData.nameTwo}</h3>`
            // second.innerHtml = `<a href="products/1"><span class="icon-left-arrow"></span></a>`
            // console.log(second.getAttribute("href"));
            // second.setAttribute("href", productsData.urlToBeAdded);
            // console.log(second.getAttribute("href"));
            // console.log(first)
            // console.log(second)

            // const second = document.querySelector(".name-2-to-be-added")
            // second.innerText = "hello"
            // console.log(second)

        }








    </script> */}

// var productsData = {{ productsData| tojson}}

// window.onload = async function exampleFunction() {

//     const allAnchors = document.querySelectorAll(".url-to-be-added")
//     console.log(allAnchors)
    
//     const sameLinkLength = (allAnchors.length / productsData.length) // or factor to increase for each url 
//     // here this calulation is  6 = 66/11
    

//     for (var i = 0; i < productsData.length; i++) {
        

//         for (var j = 0; j < 6; j++) {
//             // allAnchors[(i*6) + j].setAttribute("href", productsData[i].urlToBeAdded); 

//             allAnchors[(i * sameLinkLength) + j].setAttribute("href", productsData[i].urlToBeAdded);
//         }

        



        
//     }
// }