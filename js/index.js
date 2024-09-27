const form = document.getElementById("form");

function downloadJSON(data, filename) {
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("validated");
    if (!form.checkValidity()) {
        form.querySelectorAll(":invalid")[0].focus();
        return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object, null, 2);

    console.log(json);
    downloadJSON(json, "formulario_datos.json");

    console.log('Datos guardados en blog.json');

});