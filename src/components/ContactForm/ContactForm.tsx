import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, updateContact } from '../../redux/contactsSlice'
import { Contact } from '../../types'
import { formatPhoneNumber } from '../../utils/formatters'

interface ContactFormProps {
  contact?: Contact | null
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const dispatch = useDispatch()

  const [formContact, setFormContact] = useState<Contact>({
    id: 0,
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    if (contact) {
      setFormContact(contact)
    }
  }, [contact])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'phone') {
      setFormContact((prevContact) => ({
        ...prevContact,
        phone: formatPhoneNumber(value)
      }))
    } else {
      setFormContact((prevContact) => ({
        ...prevContact,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (contact) {
      dispatch(updateContact(formContact))
    } else {
      dispatch(addContact(formContact))
    }
    setFormContact({ id: 0, name: '', email: '', phone: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formContact.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formContact.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formContact.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">
        {contact ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  )
}

export default ContactForm
