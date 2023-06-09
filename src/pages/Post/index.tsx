import remarkGfm from 'remark-gfm'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { Issue } from '../../contexts/BlogContext'
import { apiIssue } from '../../lib/axios'

export function Post() {
  const [issue, setIssue] = useState<Issue | null>(null)

  const { number } = useParams()

  const loadIssueContent = useCallback(async () => {
    const { data } = await apiIssue(`${number}`)

    setIssue({
      id: data.id,
      title: data.title,
      body: data.body,
      comments: data.comments,
      createdAt: data.created_at,
      html_url: data.html_url,
      number: data.number,
    })
  }, [number])

  useEffect(() => {
    loadIssueContent()
  }, [loadIssueContent])

  return (
    <PostContainer>
      <PostInfo
        title={issue?.title}
        comments={issue?.comments}
        htmlUrl={issue?.html_url}
      />
      <PostContent>
        <ReactMarkdown children={issue?.body} remarkPlugins={[remarkGfm]} />
      </PostContent>
    </PostContainer>
  )
}
