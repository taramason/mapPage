

// $(document).ready(function(){

  console.log("in js")

  const data2 = {
    "status": "000",
    "kiosks": [
      {

        "kiosk_code": "00024415",
        "mpid": "00024415",
        "store_name": "King Soopers",
        "address": "318-320 Cedar Ave, Pittsburgh, PA 15212 United States",
        "location_name": "Giant Eagle",
        "latitude": 40.4514,
        "longitude": -80.0009,
        "distance_miles": "0.47606814686577087",
        "max_voucher_value": 1000
      },
      {
        "kiosk_code": "00000328",
        "mpid": "00000328",
        "store_name": "King Soopers",
        "address": "2021 Wharton Ave., Pittsburgh, PA 15203 United States",
        "location_name": "Giant Eagle",
        "latitude": 40.4309,
        "longitude": -79.9774,
        "distance_miles": "1.421931925302614",
        "max_voucher_value": 1000
      },
      {
        "kiosk_code": "00000336",
        "mpid": "00000336",
        "store_name": "King Soopers",
        "address": "Parkway Center Mall, Pittsburgh, PA 15220 United States",
        "location_name": "Giant Eagle",
        "latitude": 40.4234,
        "longitude": -80.0407,
        "distance_miles": "2.998457570219458",
        "max_voucher_value": 1000
      }
    ]
  }
  console.log("this is kiosks", data2.kiosks);
  console.log("this is an address", data2.kiosks[0].address);



  document.getElementById("button2").addEventListener("click", addDiv);


  function addDiv(e){
    console.log("data2 in event", data2);
    var array = data2.kiosks
    var count = 1;

    for (var i in array) {

        var myDiv = document.createElement('div');
        var myLi = document.createElement('li');

        var sResultsUL = document.getElementById("sResultsUL"); //Grab search results
        sResultsUL.id = "sResultsUL";

        var resRedesign = sResultsUL.appendChild(document.createElement('li'));
        resRedesign.className = "searchResultsRedesignLI";
        resRedesign.id = "resRedesign";

        var left = resRedesign.appendChild(myDiv);
        left.className = "resultsLeft";
        left.id = "left";

        var countDiv = left.appendChild(document.createElement('div'));
        countDiv.className = "machineLocKeyImg machineLocKeyImgCoinstarRedesign";
        //add count innerText here
        countDiv.innerText = count++

        var tempDiv = document.createElement('div');
        var kDist = countDiv.insertAdjacentElement('afterend', tempDiv);
        kDist.id = "kDist";
        kDist.className = "kioskDistance";
        //kiosk distance rounded innerText here
        var thisDist = array[i].distance_miles;
        var roundedThisDist = Math.max( Math.round(array[i].distance_miles * 10) / 10 ).toFixed(2);
        kDist.innerText = roundedThisDist + " mi";

        var tempDiv2 = document.createElement('div');
        var resRight = left.insertAdjacentElement('afterend', tempDiv2);
        resRight.id = "resRight";
        resRight.className = "resultsRight CoinstarResult";

//get rid of resultsRow div or resultRowRedesign div, append the remaining one with just resNameRedesign and detailsDirDiv
        var resRowRedesign = resRight.appendChild(document.createElement('div'));
        resRowRedesign.id = "resRowRedesign";
        resRowRedesign.className = "resultRowRedesign";

        var resNameRedesign = resRowRedesign.appendChild(document.createElement('div'));
        resNameRedesign.id = "resNameRedesign";
        resNameRedesign.className = "resultNameRedesign";

        //store name (i.e. King Soopers or Kroger)
        var kioskFind_StoreName = resNameRedesign.appendChild(document.createElement('a'));
        kioskFind_StoreName.id = "KioskFinder_StoreName";
        kioskFind_StoreName.href = "";
        kioskFind_StoreName.innerText = array[i].store_name;

        //address lines:
        //line 1
        var addrLine1 = resNameRedesign.appendChild(document.createElement('div'));
        addrLine1.id = "addrLine1";
        addrLine1.className = "addressLine";
        var kAddress = array[i].address;

        //line 2
        var addrLine2 = resNameRedesign.appendChild(document.createElement('div'));
        addrLine2.id = "addrLine2";
        addrLine2.className = "addressLine";
        //split address into two lines:
        var addressPart1 = kAddress.substr(0,kAddress.indexOf(',')); //make first half (street)
        var addressPart2_1 = kAddress.substr(kAddress.indexOf(',')); // make second half (city, state)
        var addressPart2_1 = addressPart2_1.substring(2, (kAddress.length)); //get rid of comma and space at beginning of city state
        var addressPart2 = addressPart2_1.replace("United States", "");
        //add to innerText of those divs
        console.log("split address", "part1:", addressPart1, "part2:", addressPart2);
        addrLine1.innerText = addressPart1;
        addrLine2.innerText = addressPart2;

        var tempDiv3 = document.createElement('div');
        var simpleDiv = resNameRedesign.insertAdjacentElement('afterend', tempDiv3);
        simpleDiv.className = "detailsDirDiv";

        var kioskFinder_SeeDetails = simpleDiv.appendChild(document.createElement('a'));
        kioskFinder_SeeDetails.id = "KioskFinder_SeeDetails";  //change id so not mess with something in module?
        kioskFinder_SeeDetails.className = "detailLinkRedesign";
        kioskFinder_SeeDetails.href = ""; //add details of machine location? where do we get this?  (What is accepts, cash or gift cards, charity e)
        kioskFinder_SeeDetails.innerText = "Kiosk Details";

        var kioskFinder_Directions = simpleDiv.appendChild(document.createElement('a'));
        kioskFinder_Directions.id = "KioskFinder_Directions";
        kioskFinder_Directions.className = "detailLinkRedesign";
        KioskFinder_Directions.href = ""; //add directions link?
        kioskFinder_Directions.innerText = "Directions";

        var tempDiv5 = document.createElement('div');
        var mlClear = resRowRedesign.insertAdjacentElement('afterend', tempDiv5);
        mlClear.className = "ML_clear";

        var tempDiv6 = document.createElement('div');
        var mlClear2 = resRight.insertAdjacentElement('afterend', tempDiv6);
        mlClear2.className = "ML_clear";




        console.log(sResultsUL);
        e.target.removeEventListener(e.type, arguments.callee);


        populateMap();

      //
      //
      //   // var resultsLeft = document.getElementById("left");  //get element
      //   countDiv = resLeft.appendChild(myDiv);  //add a div (saved in var myDiv) and add inside results Left. Saved in countDiv var
      //   countDiv.className = "machineLocKeyImg machineLocKeyImgCoinstarRedesign";
      //   countDiv.innerText = count++;
      //
      // //add div w class kioskDistance after countDiv
      // //targetElement.insertAdjacentElement(position, element);
      //
      //   var distanceDiv = countDiv.insertAdjacentElement('afterend', myDiv)
      //   // distanceDiv.className = "kioskDistance"
        // console.log(resLeft);


    }
    var strong = document.createElement('strong');
    var countDivTotal = document.getElementById('kioskCountsNumbers').appendChild(strong);
    countDivTotal.innerText = data2.kiosks.length
    document.getElementById('kioskCountsNumbers').innerText = " Coinstar";
    console.log("count", countDivTotal);


    var map;
    function addMarker(lat, lng) {
        var uluru = {lat: lat, lng: lng};
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    function populateMap() {
        geocoder = new google.maps.Geocoder();

        var address = "15203"
        //TODO: get address from search field
        geocoder.geocode({'address': address}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = '';
                    var lng = '';

                    var locations = data2.kiosks;

                    lat = results[0].geometry.location.lat();
                    lng = results[0].geometry.location.lng();

                    var uluru = {lat: lat, lng: lng};
                    map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 11,
                        center: uluru
                    });
                    var infowindow = new google.maps.InfoWindow();
                    var marker, i;

                    for ( i = 0; i < locations.length; i++) {
                        var storeLoc = {lat: locations[i].latitude, lng: locations[i].longitude};
                        var image = 'images/CS_Pin.png';
                        // might work for labels? \/\/ Currently only showing a "1" on each label in the wrong place...
                        // var labels = '123456789';
                        // var labelIndex = 0;


                        var marker = new google.maps.Marker({
                            position: storeLoc,
                            map: map,
                            icon: image,
                            // might work for labels? \/\/ Currently only showing a "1" on each label
                            // label: labels[labelIndex++ % labels.length]
                        });

                        var infoWindowContent = "<div style='font-weight: bold; font-size: 16px;'>" + locations[i].location_name + "</div>" +
                                '<p>' + locations[i].address + '</p>';

                        google.maps.event.addListener(marker, 'click', (function(marker, infoWindowContent, infowindow) {
                          return function() {
                            infowindow.setContent(infoWindowContent);
                            infowindow.open(map, marker);


                          }
                        })(marker, infoWindowContent, infowindow));

                    }
                }
            }
        );


    }


    // array.forEach(function(item){
    //   console.log(item);
    //   document.getElementsByClassName()
    // })


    // var items = ['item1', 'item2', 'item3'];
    // var copy = [];
    //
    // items.forEach(function(item){
    //   copy.push(item)
    // })

    // GET REQUEST TO USE WHEN GET API
    // var $xhr = $.getJSON('https://reqres.in/api/users');
    //
    // $xhr.done(function(data) {
    //     if ($xhr.status !== 200) {
    //         return;
    //     }
        // .each here for data
        // $('<p>').text(data.data[0].first_name + " " + data.data[0].last_name).appendTo(".results");
        //my test append ^^
    //     console.log(data.data[0]);
    // });
  }




// })
