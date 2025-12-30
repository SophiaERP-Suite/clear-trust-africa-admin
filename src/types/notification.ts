export interface ToggleNotificationSettingDto {
  notificationChannelId: number;
  isEnabled: boolean;
}

export interface NotificationSettingDto {
  notificationSettingId: number;
  notificationEventId: number;
  notificationChannelId: number;
  isEnabled: boolean;
  notificationEventName: string;
  notificationEventCode: string;
  notificationChannelName: string;
}
