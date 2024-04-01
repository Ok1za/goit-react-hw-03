import styles from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
    return (
    <div className={styles.contactContainer}>
        <span className={styles.contactName}>{contact.name}:</span>
        <span className={styles.contactNumber}>{contact.number}</span>
        <button type="button" className={styles.deleteButton} onClick={onDeleteContact}>
        Delete
        </button>
    </div>
    );
};

export default Contact;