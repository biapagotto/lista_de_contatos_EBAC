import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactItem from '../../components/ContactItem/ContactItem'
import { useNavigate } from 'react-router-dom'
import { Contact } from '../../types'
import {
  PageContainer,
  Title,
  Input,
  List,
  BackButton
} from './AddContactPage.styles'

const AddContactPage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const [editingContact, setEditingContact] = useState<Contact | null>(null)
  const [filter, setFilter] = useState<string>('')
  const navigate = useNavigate()

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact)
  }

  const filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <PageContainer>
      <Title>Add or Edit Contact</Title>
      <Input
        type="text"
        placeholder="Search Contacts"
        value={filter}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setFilter(e.target.value)
        }
      />
      <ContactForm contact={editingContact} />
      <List>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onEdit={handleEdit} />
        ))}
      </List>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
    </PageContainer>
  )
}

export default AddContactPage
