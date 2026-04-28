import React, { useState } from 'react';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Snackbar } from '@mui/material';
import { renderToStaticMarkup } from '@usewaypoint/email-builder';
import { useDocument } from '../../documents/editor/EditorContext';

export default function SaveToSoftrButton() {
  const document = useDocument();
  const [message, setMessage] = useState<string | null>(null);

  const onClick = () => {
    const html = renderToStaticMarkup(document, { rootBlockId: 'root' });
    const designJson = JSON.stringify(document);
    const params = new URLSearchParams(window.location.search);
    const recordId = params.get('recordId');

    window.parent.postMessage(
      {
        type: 'save',
        recordId: recordId,
        html: html,
        designJson: designJson,
      },
      '*'
    );

    setMessage('Saved');
  };

  const onClose = () => setMessage(null);

  return (
    <>
      <Button
        variant="contained"
        size="small"
        startIcon={<SaveOutlined />}
        onClick={onClick}
        sx={{ backgroundColor: '#232f67', '&:hover': { backgroundColor: '#1a2350' } }}
      >
        Save
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={message !== null}
        onClose={onClose}
        message={message}
        autoHideDuration={2000}
      />
    </>
  );
}
