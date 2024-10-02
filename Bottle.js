function updateBottle() {
    var containerHeight = 495;

    var totalVolume = document.getElementById('total').value; // Общий объем в миллилитрах
    var baseVolume = document.getElementById('ida').value; // Объем базы в миллилитрах
    var flavorVolume = document.getElementById('idc').value; // Объем ароматизатора в миллилитрах
    var nicotineVolume = document.getElementById("nicml").value // Объем никотина в миллилитрах

    console.log("totalVolume"+totalVolume , "baseVolume"+baseVolume , "flavourVolume" + flavorVolume , "nicotineVolume"+ nicotineBottom)


    // Вычисляем проценты для каждого компонента
    var basePercentage = (baseVolume / totalVolume) * 100;
    var flavorPercentage = (flavorVolume / totalVolume) * 100;
    var nicotinePercentage = (nicotineVolume / totalVolume) * 100;
    console.log(totalVolume)


    // Устанавливаем высоту каждого элемента в процентах
    water3Element.style.height = basePercentage + "%";
    water2Element.style.height = flavorPercentage + "%";
    water1Element.style.height = nicotinePercentage + "%";

    // Преобразуем проценты в пиксели
    var baseHeightPixels = (basePercentage / 100) * containerHeight;
    var flavorHeightPixels = (flavorPercentage / 100) * containerHeight;
    var nicotineHeightPixels = (nicotinePercentage / 100) * containerHeight;

    // Рассчитываем позицию bottom для каждого элемента
    var baseBottom = containerHeight - baseHeightPixels;
    var flavorBottom = containerHeight - baseHeightPixels - flavorHeightPixels;
    var nicotineBottom = containerHeight - baseHeightPixels - flavorHeightPixels - nicotineHeightPixels;

    // Устанавливаем позицию bottom для каждого элемента
    water3Element.style.bottom = baseBottom + "px";
    water2Element.style.bottom = flavorBottom + "px";
    water1Element.style.bottom = nicotineBottom + "px";

    console.log(document.getElementById("nicml").value,document.getElementById("idc").value )


}

