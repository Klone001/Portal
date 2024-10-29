'use client'

import { Button } from '@nextui-org/react';
import { getSession, useSession } from 'next-auth/react';
import React, { useState } from 'react';

const DashboardView = () => {

  const { data: session, update } = useSession();

  const updateSession = async () => {
    if (!session) {
      console.error("No session found");
      return; // Ensure there is a session before updating
    }

    try {
      await update({
        ...session,
        user: {
          ...session.user, // Ensure existing user properties are preserved
          lastName: 'Solomon', // Update or add new properties as needed
          email: 'adeoyesolomon2693@gmail.com', // Update or add new properties as needed
        },
      });
      console.log('Session updated successfully');
    } catch (error) {
      console.error("Failed to update session:", error);
    }
  };

  return (
    <>

      <Button onPress={updateSession}>Update</Button>
      <Button onPress={() => console.log(session)
      }>Log Session</Button>

    </>
  );
};

export default DashboardView;
