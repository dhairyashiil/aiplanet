import PropTypes from 'prop-types';
import addIcon from "/gala_add.svg";

// Prop types validation
Button.propTypes = {
    text: PropTypes.string.isRequired,  
};

export default function Button({ text }) {  
    return (
        <div className="-mr-48">
            <button
                type="button"
                className="bg-white text-black border border-black rounded-lg px-12 py-2 text-sm font-medium text-center hover:bg-blue-300 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-blue-300 dark:focus:ring-blue-800 flex items-center space-x-2"
            >
                <img src={addIcon} className="h-5 w-5" alt="Add Icon" />
                <span className=''>{text}</span>
            </button>
        </div>
    );
}
