export interface PostData {}

export interface Post {
  title?: string
  date?: Date | number
  categories?: Array<string>
  description?: string
  content?: string
}
