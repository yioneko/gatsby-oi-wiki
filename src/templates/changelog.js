import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import lightBlue from '@material-ui/core/colors/lightBlue'
import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    color: theme.palette.footer.text,
    '&:hover': {
      textDecoration: 'none',
      color: lightBlue[500],
    },
  },
}))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChangeLog = ({ pageContext: { slug, changelog }, location }) => {
  const classes = useStyles()
  return (
    <div>
      <div>anything here</div>
      <Layout location={location} noMeta="true" title="更改记录">
        <div>让我知道你的存在 okkk？？</div>
        <Timeline align="alternate">
          {changelog.all.slice(0, 15).map((item, index) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { hash, date, message, refs, body, author_name: name, author_email: email } = item
            return (
              <TimelineItem key={index + '#'}>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    {date}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      <Link href={'https://github.com/' + name}>{name}</Link>
                    </Typography>
                    <Typography>{message}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
      </Layout>
    </div>
  )
}

export default ChangeLog
