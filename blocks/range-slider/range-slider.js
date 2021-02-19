import './range-slider.scss'
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

var nonLinearStepSlider = document.getElementById('slider-id');

noUiSlider.create(nonLinearStepSlider, {
    start: [5, 10],
    range: {
        'min': [1],
        'max': [15]
    },
    connect: [false, true, false],
    step: 1

});

var nonLinearStepSliderValueElement = document.getElementById('value-id');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = Math.round(values[0])+' 000&#8381; - '+Math.round(values[1])+' 000&#8381;'
});