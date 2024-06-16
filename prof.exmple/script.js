function downloadFor(platform) {
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    if (platform === 'Windows' || platform === 'Mac') {
        link.href = 'http://localhost:8000/Professional%20Modern%20CV%20Resume%20(4).pdf';
    }

    link.download = 'Professional_Modern_CV_Resume.pdf';
    link.click();
    document.body.removeChild(link);
}


