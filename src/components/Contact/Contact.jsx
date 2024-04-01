import styles from './Contact.module.css';

const Contact = ({ contact }) => {
    return (
    <div className={styles.contactContainer}>
        <span className={styles.contactName}>{contact.name}:</span>
        <span className={styles.contactNumber}>{contact.number}</span>
    </div>
    );
};

export default Contact;