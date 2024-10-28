//obfuscate
function home() {
    document.location = 'home.html';
}

function checkFile(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0]; // Get the selected file

    if (!file) {
        alert("No file selected!");
        return;
    }

    const fileName = file.name.toLowerCase();

    // Check if the file name contains "txt"
    if (!fileName.includes("txt")) {
        alert("File rejected! The file name must contain 'txt'.");
        return;
    }

    // Get the file type from the File object
    const fileType = file.type; // MIME type

    // Check for valid text files and spoofing
    if (fileType === 'text/plain' || fileType === 'application/octet-stream') {
        alert("File accepted! This is a valid text file.");
function home() {
    document.location = 'index.html';
}

function checkFile(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0]; // Get the selected file

    if (!file) {
        alert("No file selected!");
        return;
    }

    const fileName = file.name.toLowerCase();

    // Check if the file name contains "txt"
    if (!fileName.includes("txt")) {
        alert("File rejected! The file name must contain 'txt'.");
        return;
    }

    // Get the file type from the File object
    const fileType = file.type; // MIME type

    // Check for valid text files and spoofing
    if (fileType === 'text/plain' || fileType === 'application/octet-stream') {
        alert("File accepted! This is a valid text file.");
    } else if (fileType === 'application/x-msdos-program' || fileName.endsWith('.bat')) {
        alert("File accepted! Spoof detected! Flag: flag{B9r5X3nL2T6} - This is a BAT file.");
    } else if (fileType === 'application/x-pif' || fileName.endsWith('.pif')) {
        alert("File accepted! Spoof detected! Flag: flag{B9r5X3nL2T6} - This is a PIF file.");
    } else if (fileType === 'application/pdf') {
        alert("File rejected! PDF files are not allowed.");
    } else if (fileType === 'image/jpeg' || fileType === 'image/png') {
        alert("File rejected! Image files are not allowed.");
    } else if (fileType === 'application/zip' || fileType === 'application/x-zip-compressed') {
        alert("File rejected! Zip files are not allowed.");
    } else if (fileType === 'application/x-msdownload') {
        alert("File accepted! Spoof detected! Flag: flag{B9r5X3nL2T6} - This is an EXE file.");
    } else {
        alert("File rejected! Unsupported file type.");
    }
}

const fileUploader = document.getElementById('file');
fileUploader.addEventListener('change', () => {
    console.log(fileUploader.value);
    console.log(fileUploader.files[0]);
});

    } else if (fileType === 'application/x-msdos-program' || fileName.endsWith('.bat')) {
        alert("File accepted! Spoof detected! Flag: flag{B9r5X3nL2T6} - This is a BAT file.");
    } else if (fileName.endsWith('.pif')) {
        alert("File accepted! Spoof detected! Flag: flag{B9r5X3nL2T6} - This is a PIF file.");
    } else if (fileName.endsWith('.exe')) {
        alert("File accepted! Spoof detected! Flag: flag{B9r5X3nL2T6} - This is a EXE file.");
    } else {
        alert("File rejected! Unsupported file type.");
    }
}
