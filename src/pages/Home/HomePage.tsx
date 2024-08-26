import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ContactItem from '../../components/ContactItem/ContactItem'
import { useNavigate } from 'react-router-dom'
import {
  PageContainer,
  Title,
  SearchInput,
  List,
  AddButton
} from './HomePage.style'

const HomePage: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <PageContainer>
      <Title>Contact List</Title>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search Contacts"
      />
      <List>
        {filteredContacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={function (): void {
              throw new Error('Function not implemented.')
            }}
          />
        ))}
      </List>
      <AddButton onClick={() => navigate('/add-contact')}>
        Add Contact
      </AddButton>
    </PageContainer>
  )
}

export default HomePage
