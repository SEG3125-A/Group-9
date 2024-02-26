fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        const config = {
            displayModeBar: false
        }
        console.log(data)

        /// PIE CHART FOR PROVINCE ////
        const provinceData = data.province;
        const provinceCodes = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'NT', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];
        const provinceLabels = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Northwest Territories', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];
        var provinceValues = [];
        provinceCodes.map((code) => {
            provinceValues.push(provinceData[code])
        })

        let totalNumberOfReplies = 0;
        for (let i = 0; i < provinceValues.length; i++) {
            totalNumberOfReplies += provinceValues[i];
        }
        var introduction = document.getElementById("introduction");
        if (totalNumberOfReplies == 0) {
            introduction.innerHTML = `<p>No one has replied to the survey yet.Please wait to get some responses before doing an analysis</p>`;
        } else if (totalNumberOfReplies == 1) {
            introduction.innerHTML = `<p>Only 1 person has replied to the survey. Please find the results below to be able to do an analysis.</p>`;
        } else {
            introduction.innerHTML = `<p>${totalNumberOfReplies} people have replied to the survey. Please find the results below to be able to do an analysis.</p>`;
        }

        const provinceLayout = {
            title: {
                text: "Demographic of the users that participated in the survey (Province)",
                font: {
                    color: "white"
                }
            },
            paper_bgcolor: '#282c34',
            font: {
                color: 'white'
            },
            hoverlabel: {
                font: {
                    color: 'white' // Set the font color of the tooltip
                }
            }
        };

        const provinceChart = [{
            labels: provinceLabels,
            values: provinceValues,
            type: "pie",
            textinfo: 'none'
        }];

        Plotly.newPlot("province-chart", provinceChart, provinceLayout, config);

        /// BAR CHART FOR RATINGS ////
        const ratingData = data.rating;
        const ratingLabels = ["one", "two", "three", "four", "five"];
        var ratingValues = [];
        var average = 0;
        var sum = 0;
        var count = 1;
        ratingLabels.map((rating) => {
            average += ratingData[rating]*count;
            sum += ratingData[rating];
            ratingValues.push(ratingData[rating]);
            count++;
        })
        average = average/sum;

        const ratingLayout = {
            title: {
                text: "UI Usability Rating (" + average + " of 5)",
                font: {
                    color: "white"
                }
            },
            plot_bgcolor: "#282c34",
            paper_bgcolor: "#282c34",
            xaxis: {
                title: "Ratings",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
                zerolinecolor: 'white'
            },
            yaxis: {
                title: "Number of votes received",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
            }
        };

        const ratingChart = [{
            x: ratingLabels,
            y: ratingValues,
            type: "bar",
            orientation: "v",
            marker: { color: "#4682B4" },
        }];

        Plotly.newPlot("ratings-chart", ratingChart, ratingLayout, config);

        /// BAR CHART FOR MOST USED FEATURES ////
        const featuresData = data.features;
        const featuresLabels = ["Sort and filter", "Flyers", "Store Finder", "Digital Services", "Trending in your area"];
        var featureValues = [];
        featuresLabels.map((feature) => {
            featureValues.push(featuresData[feature])
        })

        const featureLayout = {
            title: {
                text: "Most used features",
                font: {
                    color: "white"
                }
            },
            plot_bgcolor: "#282c34",
            paper_bgcolor: "#282c34",
            xaxis: {
                title: "Features",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
                zerolinecolor: 'white'
            },
            yaxis: {
                title: "Number of votes received",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
            }
        };

        const featureChart = [{
            x: featuresLabels,
            y: featureValues,
            type: "bar",
            orientation: "v",
            marker: { color: "#4682B4" },
        }];

        Plotly.newPlot("features-chart", featureChart, featureLayout, config);

        /// BAR CHART FOR MOST SHOPPED CATEGORY ////
        const shopMostData = data.shopmost;
        const shopMostLabels = ["Fruits and vegetables", "Dairy and Eggs", "Bread and Bakery", "Meat and Seafood", "Chips and Snacks", "Medicine and Drugs", "Other"];
        var shopMostValues = [];
        shopMostLabels.map((category) => {
            shopMostValues.push(shopMostData[category])
        })

        const shopMostLayout = {
            title: {
                text: "Most Shopped Categories",
                font: {
                    color: "white"
                }
            },
            plot_bgcolor: "#282c34",
            paper_bgcolor: "#282c34",
            xaxis: {
                title: "Categories",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
                zerolinecolor: 'white'
            },
            yaxis: {
                title: "Number of votes received",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
            }
        };

        const shopMostChart = [{
            x: shopMostLabels,
            y: shopMostValues,
            type: "bar",
            orientation: "v",
            marker: { color: "#4682B4" },
        }];

        Plotly.newPlot("shop-most-chart", shopMostChart, shopMostLayout, config);

        /// BAR CHART FOR SHOPPING PREFERENCES ////
        const preferencesData = data.shoppingpref;
        const preferencesLabels = ["In person", "Online pickup", "Online delivery", "Other"];
        var preferencesValues = [];
        console.log(preferencesData)
        preferencesLabels.map((category) => {
            preferencesValues.push(preferencesData[category])
        })

        const preferencesLayout = {
            title: {
                text: "Preferred mode of shopping",
                font: {
                    color: "white"
                }
            },
            plot_bgcolor: "#282c34",
            paper_bgcolor: "#282c34",
            xaxis: {
                title: "Mode",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
                zerolinecolor: 'white'
            },
            yaxis: {
                title: "Number of votes received",
                titlefont: {
                    color: 'white'
                },
                tickfont: {
                    color: 'white'
                },
                linecolor: 'white',
            }
        };

        const preferencesChart = [{
            x: preferencesLabels,
            y: preferencesValues,
            type: "bar",
            orientation: "v",
            marker: { color: "#4682B4" },
        }];

        Plotly.newPlot("preferences-chart", preferencesChart, preferencesLayout, config);


        /// COMMENTS SECTION ///
        var comments = data.imp;
        var commentsList = document.getElementById("comments-list");


        comments.forEach(function (comment) {
            var dialogBox = document.createElement("div");
            dialogBox.className = "dialogbox";

            var body = document.createElement("div");
            body.className = "body";

            var userName = document.createElement("div");
            userName.className = "username";
            userName.textContent = comment.fullname;
            body.appendChild(userName);

            var message = document.createElement("div");
            message.className = "message";
            message.textContent = comment.value;
            body.appendChild(message);

            dialogBox.appendChild(body);

            commentsList.appendChild(dialogBox);
        });


    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });