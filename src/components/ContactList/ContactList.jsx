import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
    <ul className={styles.contactList}>
        {contacts.map((contact) => (
        <li key={contact.id} className={styles.contactItem}>
            <Contact contact={contact} onDeleteContact={() => onDeleteContact(contact.id)} />
        </li>
        ))}
    </ul>
    );
};

export default ContactList;