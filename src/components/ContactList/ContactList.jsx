import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
            <span className={styles.contactName}>{name}:</span>
            <span className={styles.contactNumber}>{number}</span>
            <button type="button" className={styles.deleteButton} onClick={() => onDeleteContact(id)}>
            Delete
            </button>
        </li>
        ))}
    </ul>
    );
};

export default ContactList;