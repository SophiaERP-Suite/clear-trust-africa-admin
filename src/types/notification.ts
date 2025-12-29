interface NotificationChannel {
  id: number;
  name: string;
}

interface NotificationSettingDto {
  eventId: number;
  eventName: string;
  channels: { [channelName: string]: boolean };
}
