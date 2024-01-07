import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contact.contacts.items;

export const getIsLoading = state => state.contact.contacts.isLoading;

export const getError = state => state.contact.contacts.error;

export const getStatusFilter = state => state.contact.filter;

export const visibleContacts = createSelector(
  [getContacts, getStatusFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
