$.getJSON('assets/db/data.json', function(data) {
    // Features Section
    for(let i = 0; i < data.features.length; i++) {
        $(".rowFeatures").append(`
            <div class="col-4 px-5 my-4 featuresCard">
                <h4>${data.features[i].title}</h4>
                <p>${data.features[i].description}</p>
            </div>
        `);
    }

    // Widget Model Example Section Slider
    for (let i = 0; i < data.widgetModeExamples.length; i++) {
        $(".slider").append(`
            <div class="slides">
                <div class="slide">
                    <img src="${data.widgetModeExamples[i].img}" alt="Image 1">
                    <div class="slide-content">
                        <h2>${data.widgetModeExamples[i].title}</h2>
                        <p>${data.widgetModeExamples[i].date}</p>
                        <p>${data.widgetModeExamples[i].description}</p>
                        <a href="#" class="read-more">Read More: ${data.widgetModeExamples[i].title}</a>
                    </div>
                </div>
            </div>
            <div class="slider-navigation">
                <span class="prev">&#10094;</span>
                <span class="next">&#10095;</span>
            </div>
        `);
    }

    function moveToSlide(slider, index) {
        const $slides = $(slider).find('.slides');
        const $slideItems = $slides.find('.slide');
        const totalSlides = $slideItems.length;

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        $slides.css('transform', `translateY(${-index * 100}%)`);
        $(slider).data('currentIndex', index);
    }

    $('.rowExample').on('click', '.next', function() {
        const $slider = $(this).closest('.slider');
        let currentIndex = $slider.data('currentIndex') || 0;
        moveToSlide($slider, currentIndex + 1);
    });

    $('.rowExample').on('click', '.prev', function() {
        const $slider = $(this).closest('.slider');
        let currentIndex = $slider.data('currentIndex') || 0;
        moveToSlide($slider, currentIndex - 1);
    });



    // More Examples

    for(let i = 0; i < data.moreExamples.length; i++) {
        $(".rowMoreExamples").append(`
            <div class="col-lg-4 my-4 mx-5">
                <div class="card">
                    <img src="${data.moreExamples[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.moreExamples[i].title}</h5>
                        <p class="card-text">${data.moreExamples[i].description}</p>
                    </div>
                </div>
            </div>
        `);
    }

});