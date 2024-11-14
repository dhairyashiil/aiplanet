import PropTypes from 'prop-types';
import pdfNameIcon from "/pdfNameIcon.svg";

// Prop types validation
PdfName.propTypes = {
    name: PropTypes.string.isRequired,
};

export default function PdfName({ name }) {
    return (
        <div className="ml-auto bg-white px-12 py-2 font-semibold text-center flex items-center space-x-2 text-green-600">  {/* Increased font size */}
            <img src={pdfNameIcon} className="h-5 w-5" alt="Pdf Name Icon" /> {/* Optional: adjust icon size if necessary */}
            <span>{name}</span>
        </div>
    );
}

