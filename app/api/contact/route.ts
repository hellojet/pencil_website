import { NextRequest, NextResponse } from 'next/server'

const TO_EMAIL = 'sathiprobusiness@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formType, ...data } = body

    if (!data.name || !data.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    let subject: string
    let htmlContent: string

    switch (formType) {
      case 'design':
        subject = `[Design Inquiry] ${data.projectName || 'New Project'} — from ${data.name}`
        htmlContent = buildDesignEmail(data)
        break
      case 'industry':
        subject = `[${data.industry || 'Industry'} Inquiry] from ${data.name}`
        htmlContent = buildIndustryEmail(data)
        break
      default:
        subject = `[Sourcing Inquiry] from ${data.name}`
        htmlContent = buildContactEmail(data)
    }

    if (!process.env.RESEND_API_KEY) {
      console.log('RESEND_API_KEY not set — mock mode. Would send:', { subject, to: TO_EMAIL })
      return NextResponse.json({ success: true, mock: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'SathiPro <onboarding@resend.dev>',
      to: TO_EMAIL,
      subject,
      html: htmlContent,
      replyTo: data.email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

function row(label: string, value: string | undefined) {
  if (!value) return ''
  return `<tr><td style="padding:6px 12px;font-weight:600;color:#374151">${label}</td><td style="padding:6px 12px;color:#4b5563">${value}</td></tr>`
}

function buildContactEmail(data: Record<string, string>) {
  return `
    <h2 style="color:#1d4ed8">New Sourcing Inquiry</h2>
    <table style="border-collapse:collapse;width:100%">
      ${row('Name', data.name)}
      ${row('Email', data.email)}
      ${row('WhatsApp', data.whatsapp)}
      ${row('Category', data.category)}
      ${row('Target Market', data.targetMarket)}
      ${row('Budget', data.budget)}
      ${row('MOQ', data.moq)}
      ${row('Timeline', data.timeline)}
    </table>
    <h3 style="color:#374151;margin-top:16px">Message</h3>
    <p style="color:#4b5563;white-space:pre-wrap">${data.message || '—'}</p>
  `
}

function buildDesignEmail(data: Record<string, string>) {
  return `
    <h2 style="color:#1d4ed8">New Design Inquiry</h2>
    <table style="border-collapse:collapse;width:100%">
      ${row('Name', data.name)}
      ${row('Email', data.email)}
      ${row('WhatsApp', data.whatsapp)}
      ${row('Project Name', data.projectName)}
      ${row('Project Type', data.projectType)}
    </table>
    <h3 style="color:#374151;margin-top:16px">Design Requirements</h3>
    <p style="color:#4b5563;white-space:pre-wrap">${data.requirements || '—'}</p>
  `
}

function buildIndustryEmail(data: Record<string, string>) {
  return `
    <h2 style="color:#1d4ed8">${data.industry || 'Industry'} Inquiry</h2>
    <table style="border-collapse:collapse;width:100%">
      ${row('Name', data.name)}
      ${row('Email', data.email)}
      ${row('WhatsApp', data.whatsapp)}
      ${row('Country', data.country)}
      ${row('Product', data.product)}
      ${row('Budget', data.budget)}
    </table>
  `
}
