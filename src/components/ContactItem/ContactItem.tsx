import React from 'react'
import { useDispatch } from 'react-redux'
import { removeContact } from '../../redux/contactsSlice'
import { Contact } from '../../redux/contactsSlice'
import { Item, Button } from './ContactItem.styles'

interface ContactItemProps {
  contact: Contact
  onEdit: (contact: Contact) => void
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit }) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeContact(contact.id))
  }

  return (
    <Item>
      <div>
        <strong>{contact.name}</strong>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </div>
      <Button onClick={() => onEdit(contact)}>Editar</Button>
      <Button onClick={handleRemove}>Remover</Button>
    </Item>
  )
}

export default ContactItem
