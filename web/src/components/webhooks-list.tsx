import { useQuery } from '@tanstack/react-query'
import { webhookListSchema } from '../http/schemas/webhooks'
import { WebhookListItem } from './webhook-list-item'

export function WebhookList() {
  const { data, isLoading } = useQuery({
    queryKey: ['webhooks'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/api/webhooks')
      const data = await response.json()

      return webhookListSchema.parse(data)
    },
  })

  return (
    <div className='flex-1 overflow-y-auto'>
      <div className='space-y-1 p-2'>
        <WebhookListItem />
        <WebhookListItem />
        <WebhookListItem />
        <WebhookListItem />
        <WebhookListItem />
      </div>
    </div>
  )
}
