import express, { Request, Response } from 'express';
import twilioConversation, { TypedRequest } from './getInstance';

import conversationRoutes from './routes/conversationRoutes';
import participantsRoutes from './routes/participantRoutes';
import messageRoutes from './routes/messageRoutes';

const app = express();
app.use(express.json());

app.use((req: TypedRequest, res, next) => {
  req.twilioConversation = twilioConversation;
  next();
});

app.use('/conversations', conversationRoutes);
app.use('/participants', participantsRoutes);
app.use('/messages', messageRoutes);

app.get('/media/:id', async (req: Request, res: Response) => {
  const mediaContent = await twilioConversation.getMedia(req.params.id);
  res.send(mediaContent);
});

app.listen(3000, () => console.log('Server running on port 3000'));
